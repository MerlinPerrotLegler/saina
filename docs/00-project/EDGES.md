---
id: edges
type: contract
status: accepted
lang: fr
aliases: []
tags:
  - contract
relates_to:
  - "[[GOAL]]"
  - "[[GUIDELINES]]"
  - "[[PROCESS]]"
  - "[[GLOSSARY-SUMMARY]]"
prev: []
next: []
glossary:
  - "[[scss-nomenclature]]"
governed_by: []
code_paths: []
test_paths: []
---

# Carte des arêtes

Source machine : `schemas/edge-map.json`. Graphify n’accepte que `calls`, `implements`, `references`, `cites`, `conceptually_related_to`, `shares_data_with`, `semantically_similar_to`, `rationale_for`. Le YAML porte le vocabulaire métier ; un overlay ultérieur émet des arêtes `EXTRACTED` (`confidence_score` 1.0).

## Pipeline

```text
discussion → fsd → tsd → user-doc
                 ↓
              task → test → code (code_paths)
                 ↓
              user-doc (à jour)
```

Templates : [[tpl-discussion]], [[tpl-fsd]], [[tpl-tsd]], [[tpl-user-doc]], [[tpl-task]], [[tpl-test]].

Tout rattache à [[GOAL]], [[GUIDELINES]], [[GITFLOW]] et au glossaire. Le SCSS spécifique vit dans Vue/Nuxt sous `app/`, pas dans ce vault — voir [[scss-nomenclature]] et [[TOKENS]].

## Table métier → Graphify

| relation métier | source → cible | déclencheur | Graphify `relation` |
| --- | --- | --- | --- |
| `ADVANCES` | `prev` → note → `next` | `prev` / `next` | `conceptually_related_to` |
| `GOVERNS` | [[GOAL]] / [[GUIDELINES]] / [[GITFLOW]] → spec | `governed_by` | `rationale_for` |
| `GLOSSES` | note → terme | `glossary` | `references` |
| `SPECIFIES` | fsd / tsd / user-doc → fichier | `code_paths` | `references` |
| `IMPLEMENTS` | fichier code → spec | inverse de `code_paths` + `@spec [[fsd-…]]` | `implements` |
| `TESTS` | note `test` → spec ; fichier test → spec | `relates_to` + `test_paths` | `implements` |
| `STYLES` | [[TOKENS]] → SFC Vue | `code_paths` sous `app/` + `scss_namespace` | `shares_data_with` |
| `SUMMARIZES` | [[GLOSSARY-SUMMARY]] → `glossary/*` | wikilinks du summary | `references` |

## Règles

- Si ce n’est pas dans le YAML (ou `@spec` / `@glossary` dans le code), ce n’est **pas** une arête de process (au mieux INFERRED).
- Un wikilink de corps sans champ YAML → `references` EXTRACTED (citation), pas une relation métier.
- Direction : **source = note ou fichier qui déclare**, sauf `IMPLEMENTS` (code → spec).
- Confiance overlay : toujours `EXTRACTED` / `1.0`.
- Noms de notes globalement uniques dans le vault (wikilink court sans chemin).
