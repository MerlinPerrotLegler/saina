import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  setHeader(event, "content-type", "text/css; charset=utf-8");
  return readFile(join(process.cwd(), "app/assets/css/components.css"), "utf8");
});
