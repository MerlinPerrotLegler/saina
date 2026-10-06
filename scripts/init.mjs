#!/usr/bin/env node
/**
 * npm run init — vérifie le kit (vault + schemas) et rapporte la définition projet.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import Ajv2020 from "ajv/dist/2020.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const vault = join(root, "docs");
const schemaPath = join(root, "schemas/note.schema.json");
const edgeMapPath = join(root, "schemas/edge-map.json");

const required = [
  "schemas/note.schema.json",
  "schemas/edge-map.json",
  "docs/.obsidian/templates.json",
  "docs/00-project/GOAL.md",
  "docs/00-project/GUIDELINES.md",
  "docs/00-project/GITFLOW.md",
  "docs/00-project/GLOSSARY-SUMMARY.md",
  "docs/00-project/PROCESS.md",
  "docs/00-project/EDGES.md",
  "docs/30-glossary/scss-nomenclature.md",
  "docs/40-styleguide/TOKENS.md",
  "docs/templates/tpl-discussion.md",
  "docs/templates/tpl-fsd.md",
  "docs/templates/tpl-tsd.md",
  "docs/templates/tpl-user-doc.md",
  "docs/templates/tpl-task.md",
  "docs/templates/tpl-test.md",
];

const definitionNotes = [
  "docs/00-project/GOAL.md",
  "docs/00-project/GUIDELINES.md",
  "docs/00-project/GITFLOW.md",
  "docs/00-project/GLOSSARY-SUMMARY.md",
];

const fmRe = /^---\n([\s\S]*?)\n---/;
const placeholderRe = /_À (rédiger|extraire)\._/;

function walkMd(dir, acc = []) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.name === ".obsidian") continue;
    const p = join(dir, name.name);
    if (name.isDirectory()) walkMd(p, acc);
    else if (name.name.endsWith(".md")) acc.push(p);
  }
  return acc;
}

const missing = required.filter((rel) => !existsSync(join(root, rel)));
if (missing.length) {
  console.error("Fichiers kit manquants :");
  for (const m of missing) console.error(`  - ${m}`);
  process.exit(1);
}

const noteSchema = JSON.parse(readFileSync(schemaPath, "utf8"));
JSON.parse(readFileSync(edgeMapPath, "utf8"));

const ajv = new Ajv2020({ allErrors: true, strict: false });
const validate = ajv.compile(noteSchema);

let failed = 0;
const notes = walkMd(vault);
for (const file of notes) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  const m = fmRe.exec(text);
  if (!m) {
    console.error(`${rel}: pas de frontmatter YAML`);
    failed += 1;
    continue;
  }
  const data = yaml.load(m[1]);
  if (!validate(data)) {
    failed += 1;
    console.error(`${rel}:`);
    for (const err of validate.errors ?? []) {
      console.error(`  ${err.instancePath || "/"} ${err.message}`);
    }
  }
}

if (failed) {
  console.error(`\ninit: ${failed} note(s) invalide(s) / ${notes.length}`);
  process.exit(1);
}

console.log("Project Host Kit — init OK");
console.log(`  vault : ${vault}`);
console.log(`  notes : ${notes.length} frontmatter valide(s)`);
console.log("");
console.log("Définition projet :");

let pending = 0;
for (const rel of definitionNotes) {
  const text = readFileSync(join(root, rel), "utf8");
  const m = fmRe.exec(text);
  const data = yaml.load(m[1]);
  const stub = placeholderRe.test(text) || data.status === "draft";
  if (stub) pending += 1;
  console.log(
    `  ${rel.padEnd(40)} ${String(data.status).padEnd(12)}${stub ? " ← à remplir" : ""}`.trimEnd(),
  );
}

console.log("");
if (pending) {
  console.log("Prochaines étapes :");
  console.log("  1. Ouvrir docs/ comme vault Obsidian");
  console.log("  2. Remplir GOAL, GUIDELINES, GITFLOW, GLOSSARY-SUMMARY (wikilinks YAML quotés)");
  console.log("  3. Specs : discussion → fsd → tsd → user-doc → task → test → code (PROCESS.md)");
  console.log("  4. SCSS spécifique uniquement dans app/ (Vue/Nuxt), pas dans docs/");
} else {
  console.log("Définition projet complète. Suivre docs/00-project/PROCESS.md pour les specs.");
}
console.log("");
console.log("Graphify : le vault métier est docs/ — ne pas remplacer par `graphify export obsidian`.");
