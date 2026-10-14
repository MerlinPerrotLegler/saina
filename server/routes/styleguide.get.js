import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/html; charset=utf-8");
  return readFile(join(process.cwd(), "styleguide/index.html"), "utf8");
});
