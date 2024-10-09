import extractPgSchema from "npm:extract-pg-schema";
import postgres from "npm:postgres";

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
