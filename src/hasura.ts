import { z } from "npm:zod";
import { parse as parseYaml } from "jsr:@std/yaml";
import { join } from "node:path";
import { readFileSync } from "node:fs";
import { pipe } from "@core/pipe";

const databasesYamlSchema = z.array(
  z.object({
    name: z.string(),
    kind: z.string(),
    tables: z.string(),
  })
);

const tablesYamlSchema = z.array(z.string());

const qualifiedTableSchema = z.object({
  name: z.string(),
  schema: z.string(),
});

const objectRelationshipSchema = z.object({
  comment: z.string().optional(),
  name: z.string(),
  using: z.object({
    foreign_key_constraint_on: z
      .union([z.string(), z.array(z.string())])
      .optional(),
    manual_configuration: z
      .object({
        column_mapping: z.record(z.string(), z.string()),
        remote_table: z.union([qualifiedTableSchema, z.string()]),
      })
      .optional(),
  }),
});

const arrayRelationshipSchema = z.object({
  comment: z.string().optional(),
  name: z.string(),
  using: z.object({
    foreign_key_constraint_on: z
      .object({
        column: z.string().optional(),
        columns: z.array(z.string()).optional(),
        table: z.union([qualifiedTableSchema, z.string()]),
      })
      .optional(),
    manual_configuration: z
      .object({
        column_mapping: z.record(z.string(), z.string()),
        remote_table: z.union([qualifiedTableSchema, z.string()]),
      })
      .optional(),
  }),
});

const tableEntrySchema = z.object({
  table: z.object({
    name: z.string(),
    schema: z.string(),
  }),
  array_relationships: z.array(arrayRelationshipSchema).optional(),
  object_relationships: z.array(objectRelationshipSchema).optional(),
});

export const listDatabaseNames = (metadataPath: string) =>
  pipe(
    join(metadataPath, "databases", "databases.yaml"),
    readFileSync,
    String,
    parseYaml,
    databasesYamlSchema.parse
  ).map((d) => d.name);

export const listTables = (metadataPath: string, databaseName: string) =>
  pipe(
    join(metadataPath, "databases", databaseName, "tables", "tables.yaml"),
    readFileSync,
    String,
    parseYaml,
    tablesYamlSchema.parse
  )
    .filter((t) => t.startsWith("!include "))
    .map((t) =>
      pipe(
        t.slice(9),
        (filename) =>
          join(metadataPath, "databases", databaseName, "tables", filename),
        readFileSync,
        String,
        parseYaml,
        tableEntrySchema.parse
      )
    );
