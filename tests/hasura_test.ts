import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { listDatabaseNames, listTables } from "../src/hasura.ts";

describe("hasura tests", () => {
  it("should list database names", () => {
    expect(listDatabaseNames("./tests/fixtures/hasura/metadata")).toStrictEqual(
      ["default"]
    );
  });
  it("should list tables", () => {
    const tables = listTables("./tests/fixtures/hasura/metadata", "default");
    console.log({ tables });
    // expect(tables).toStrictEqual(["users"]);
  });
});
