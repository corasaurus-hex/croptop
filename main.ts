import { extractSchemas } from "./src/pg.ts";
import { parseOptions } from "./src/cmd.ts";

const options = await parseOptions();
const schemas = await extractSchemas(options);
console.log(options);
schemas.public.tables[0].columns
  .sort((a, b) => a.expandedType.localeCompare(b.expandedType))
  .forEach((column) => console.log([column.name, column.expandedType]));
