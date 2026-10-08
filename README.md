# Sïana Joaillerie

Site d’Anaïs (Sïana). Le vault métier est [`docs/`](docs/) : objectif, charte, page à propos, quiz de style. Les visuels sont dans [`assets/brand/`](assets/brand/).

Le dépôt repose sur le Project Host Kit : contrat des notes dans [`schemas/`](schemas/), pas de scaffold `app/` / `api/` tant que les specs ne sont pas découpées en tâches.

## Init

```bash
npm install
npm run init
```

Vérifie le vault (`docs/`) contre [`schemas/note.schema.json`](schemas/note.schema.json) et liste les notes de définition encore en stub. La règle Cursor [`.cursor/rules/init.mdc`](.cursor/rules/init.mdc) demande à l’IA de lancer cette commande avant d’écrire du code applicatif.

## Ouvrir le vault

Dans Obsidian : *Open folder as vault* → le dossier [`docs/`](docs/).

Le core plugin **Templates** pointe vers `templates/`. Les fichiers `tpl-*.md` ont des noms distincts des stubs (`GOAL.md`, etc.) pour que les wikilinks restent uniques (macOS est insensible à la casse).

## Contrat

| Fichier | Rôle |
| --- | --- |
| [`schemas/note.schema.json`](schemas/note.schema.json) | Frontmatter YAML (pas le corps) |
| [`schemas/edge-map.json`](schemas/edge-map.json) | Relations métier → enum Graphify |
| [`docs/00-project/EDGES.md`](docs/00-project/EDGES.md) | Même carte, lisible dans le vault |

Noms de notes **globalement uniques** : wikilink court `[[GOAL]]`, `[[fsd-checkout]]`, `[[checkout]]`. Pas de chemin dans le lien.

Le champ `id` est un slug kebab minuscule. Les notes projet singleton utilisent un filename majuscule (`GOAL.md` → `id: goal`).

Les wikilinks dans le YAML sont **toujours quotés** (`"[[GOAL]]"`), sinon YAML les parse comme des listes imbriquées.

## SCSS / Tailwind

- Tailwind = primitives (voir [[TOKENS]] / [`docs/40-styleguide/TOKENS.md`](docs/40-styleguide/TOKENS.md)).
- SCSS spécifique = SFC Vue (`<style lang="scss">`) ou `app/**/*.scss` adjacent — jamais sous `docs/` ni `api/`. Nomenclature : [`docs/30-glossary/scss-nomenclature.md`](docs/30-glossary/scss-nomenclature.md).
- Une spec UI déclare `scss_namespace` + `code_paths` sous `app/`.

## Processus spec

Voir [`docs/00-project/PROCESS.md`](docs/00-project/PROCESS.md) :

discussion → FSD → TSD → user-doc → task → tests → code → user-doc à jour.

Seuls le YAML (et `@spec` / `@glossary` dans le code) produisent des arêtes de process `EXTRACTED` pour Graphify.

## Valider un frontmatter

```bash
npm run init
```

Graphify : ne pas lancer `graphify export obsidian` comme vault métier. Le vault **est** `docs/` ; `graphify-out/` sera un index généré plus tard.
