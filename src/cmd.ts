import { Command } from "@cliffy/command";

export const parseOptions = async () => {
  const { options } = await new Command()
    .name("croptop")
    .version("0.1.0")
    .description("subset your db with style")
    .env("POSTGRES_HOST=<host:string>", "Postgres host")
    .env("POSTGRES_PORT=<port:number>", "Postgres port")
    .env("POSTGRES_USER=<user:string>", "Postgres user")
    .env("POSTGRES_PASSWORD=<password:string>", "Postgres password")
    .env("POSTGRES_DATABASE=<database:string>", "Postgres database")
    .env(
      "POSTGRES_SCHEMAS=<schemas:string>",
      "Comma-separated postgres schema names (default: all non-system schemas)",
      {
        value: (value: string) => value.split(","),
      }
    )
    .option("-H, --host <host:string>", "Postgres host", {
      default: "localhost",
    })
    .option("-p, --port <port:number>", "Postgres port", { default: 5656 })
    .option("-u, --user <user:string>", "Postgres user", {
      default: "croptopuser",
    })
    .option("-P, --password <password:string>", "Postgres password", {
      default: "croptoppassword",
    })
    .option("-d, --database <database:string>", "Postgres database", {
      default: "croptopdb",
    })
    .option(
      "-s, --schema <schema:string>",
      "Comma-separated postgres schema names (default: all non-system schemas)",
      {
        value: (value: string) => value.split(","),
      }
    )
    .parse(Deno.args);

  return options;
};
