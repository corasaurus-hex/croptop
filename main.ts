import { Command } from "@cliffy/command";
import { extractSchemas } from "./src/pg.ts";

const { options } = await new Command()
  .name("croptop")
  .version("0.1.0")
  .description("subset your db with style")
  .env("POSTGRES_HOST=<host:string>", "Postgres host")
  .env("POSTGRES_PORT=<port:number>", "Postgres port")
  .env("POSTGRES_USER=<user:string>", "Postgres user")
  .env("POSTGRES_PASSWORD=<password:string>", "Postgres password")
  .env("POSTGRES_DATABASE=<database:string>", "Postgres database")
  .option("-H, --host <host:string>", "Postgres host", { default: "localhost" })
  .option("-p, --port <port:number>", "Postgres port", { default: 5432 })
  .option("-u, --user <user:string>", "Postgres user", { default: "postgres" })
  .option("-P, --password <password:string>", "Postgres password", {
    default: "postgrespassword",
  })
  .option("-d, --database <database:string>", "Postgres database", {
    default: "postgres",
  })
  .parse(Deno.args);

console.log(options);
console.log(await extractSchemas(options));
