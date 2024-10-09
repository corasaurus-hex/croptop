import { afterAll, beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { extractSchemas } from "../src/pg.ts";
import postgres from "npm:postgres";
import { createTables } from "./fixtures/tables.ts";

describe("pg tests", () => {
  let sql: postgres.Sql;

  beforeAll(async () => {
    sql = postgres({
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "postgrespassword",
      database: "postgres",
    });

    await createTables(sql);
  });

  afterAll(async () => {
    await sql.end();
  });

  it("should extract schemas", async () => {
    expect(
      await extractSchemas({
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "postgrespassword",
        database: "postgres",
      })
    ).toBeTruthy();
  });
});
