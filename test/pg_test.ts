import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { extractSchemas } from "../src/pg.ts";

describe("pg tests", () => {
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
