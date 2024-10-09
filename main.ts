import { extractSchemas } from "./src/pg.ts";
import { parseOptions } from "./src/cmd.ts";

const options = await parseOptions();
const schemas = await extractSchemas(options);
console.log(options);
console.log(schemas);
