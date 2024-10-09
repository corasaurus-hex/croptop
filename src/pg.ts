import extractPgSchema from "npm:extract-pg-schema";
import postgres from "npm:postgres";

export const typeMap = new Map([
  ["pg_catalog.bit", "bit"],
  ["pg_catalog.bool", "boolean"],
  ["pg_catalog.box", "box"],
  ["pg_catalog.bpchar", "char"],
  ["pg_catalog.bytea", "bytea"],
  ["pg_catalog.cidr", "cidr"],
  ["pg_catalog.circle", "circle"],
  ["pg_catalog.date", "date"],
  ["pg_catalog.daterange", "daterange"],
  ["pg_catalog.float4", "real"],
  ["pg_catalog.float8", "double precision"],
  ["pg_catalog.inet", "inet"],
  ["pg_catalog.int2", "smallint"],
  ["pg_catalog.int4", "integer"],
  ["pg_catalog.int4range", "int4range"],
  ["pg_catalog.int8", "bigint"],
  ["pg_catalog.int8range", "int8range"],
  ["pg_catalog.interval", "interval"],
  ["pg_catalog.json", "json"],
  ["pg_catalog.jsonb", "jsonb"],
  ["pg_catalog.line", "line"],
  ["pg_catalog.lseg", "lseg"],
  ["pg_catalog.macaddr", "macaddr"],
  ["pg_catalog.macaddr8", "macaddr8"],
  ["pg_catalog.money", "money"],
  ["pg_catalog.numeric", "numeric"],
  ["pg_catalog.numrange", "numrange"],
  ["pg_catalog.path", "path"],
  ["pg_catalog.point", "point"],
  ["pg_catalog.polygon", "polygon"],
  ["pg_catalog.text", "text"],
  ["pg_catalog.time", "time"],
  ["pg_catalog.timestamp", "timestamp"],
  ["pg_catalog.timestamptz", "timestamptz"],
  ["pg_catalog.tsquery", "tsquery"],
  ["pg_catalog.tsrange", "tsrange"],
  ["pg_catalog.tstzrange", "tstzrange"],
  ["pg_catalog.tsvector", "tsvector"],
  ["pg_catalog.uuid", "uuid"],
  ["pg_catalog.varbit", "varbit"],
  ["pg_catalog.varchar", "character varying"],
  ["pg_catalog.xml", "xml"],
]);

export const extractSchemas = async (options: {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}) => {
  const connection = {
    host: options.host,
    port: options.port,
    user: options.user,
    password: options.password,
    database: options.database,
  };

  const schemas = await extractPgSchema.extractSchemas(connection);

  return schemas;
};

export const isTableExists = async (sql: postgres.Sql, tableName: string) =>
  (await sql`SELECT to_regclass(${tableName}) IS NOT NULL AS exists`)[0].exists;
