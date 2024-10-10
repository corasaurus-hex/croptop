import { afterAll, beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { extractSchemas } from "../src/pg.ts";
import postgres from "npm:postgres";

describe("pg tests", () => {
  let sql: postgres.Sql;

  beforeAll(() => {
    sql = postgres({
      host: "localhost",
      port: 5656,
      user: "croptopuser",
      password: "croptoppassword",
      database: "croptopdb",
    });
  });

  afterAll(async () => {
    await sql.end();
  });

  it("should extract schemas", async () => {
    expect(
      await extractSchemas({
        host: "localhost",
        port: 5656,
        user: "croptopuser",
        password: "croptoppassword",
        database: "croptopdb",
      })
    ).toBeTruthy();
  });
});
