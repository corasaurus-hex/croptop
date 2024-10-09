import postgres from "npm:postgres";
import { isTableExists } from "../../src/pg.ts";

export const createOrgTable = async (sql: postgres.Sql) =>
  isTableExists(sql, "org") ||
  (await sql`
    CREATE TABLE IF NOT EXISTS org
    (
        id   BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        url  TEXT
    )`);

export const createUserTable = async (sql: postgres.Sql) =>
  isTableExists(sql, "user") ||
  (await sql`
    CREATE TABLE IF NOT EXISTS "user"
    (
        id     BIGSERIAL PRIMARY KEY,
        name   TEXT        NOT NULL,
        email  TEXT UNIQUE NOT NULL,
        org_id BIGINT REFERENCES org (id)
    )`);

export const createWidgetTable = async (sql: postgres.Sql) =>
  isTableExists(sql, "widget") ||
  (await sql`
    CREATE TABLE IF NOT EXISTS widget
    (
        id          BIGSERIAL PRIMARY KEY,
        name        TEXT NOT NULL,
        description TEXT,
        org_id      BIGINT REFERENCES org (id),
        UNIQUE (id, org_id)
    )`);

export const createPartTable = async (sql: postgres.Sql) =>
  isTableExists(sql, "part") ||
  (await sql`
      CREATE TABLE IF NOT EXISTS part
      (
          id          BIGSERIAL PRIMARY KEY,
          name        TEXT   NOT NULL,
          description TEXT,
          widget_id   BIGINT NOT NULL,
          org_id      BIGINT NOT NULL,
          FOREIGN KEY (widget_id, org_id) REFERENCES widget (id, org_id)
      )`);

export const createPartComponentTable = async (sql: postgres.Sql) =>
  isTableExists(sql, "part_component") ||
  (await sql`
    CREATE TABLE IF NOT EXISTS part_component
    (
        id          BIGSERIAL PRIMARY KEY,
        name        TEXT   NOT NULL,
        description TEXT,
        org_id      BIGINT NOT NULL,
        part_id     BIGINT NOT NULL
    )`);

export const createTables = async (sql: postgres.Sql) => {
  await createOrgTable(sql);
  await createUserTable(sql);
  await createWidgetTable(sql);
  await createPartTable(sql);
  await createPartComponentTable(sql);
};
