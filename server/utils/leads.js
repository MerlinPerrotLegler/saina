import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

export async function appendLead(filename, record) {
  const dir = join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(join(dir, filename), `${JSON.stringify(record)}\n`, "utf8");
}
