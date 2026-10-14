import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mjml2html from "mjml";

const root = path.dirname(fileURLToPath(import.meta.url));
const names = ["contact", "quiz", "newsletter", "manager-formulaire", "manager-demande"];
const outDir = path.join(root, "html");

await mkdir(outDir, { recursive: true });

let failed = false;

for (const name of names) {
  const filePath = path.join(root, `${name}.mjml`);
  const source = await readFile(filePath, "utf8");
  const { html, errors } = await mjml2html(source, {
    filePath,
    ignoreIncludes: false,
    validationLevel: "strict",
  });
  if (errors?.length) {
    failed = true;
    for (const error of errors) {
      console.error(`${name}.mjml: ${error.formattedMessage || error.message}`);
    }
  }
  if (html) await writeFile(path.join(outDir, `${name}.html`), html);
  console.log(`${name}.mjml → html/${name}.html`);
}

if (failed) process.exit(1);
