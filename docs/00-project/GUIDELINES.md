---
id: guidelines
type: guideline
status: draft
lang: fr
aliases: []
tags:
  - project
relates_to:
  - "[[GOAL]]"
  - "[[GITFLOW]]"
  - "[[scss-nomenclature]]"
  - "[[TOKENS]]"
  - "[[EDGES]]"
prev: []
next: []
glossary:
  - "[[scss-nomenclature]]"
governed_by:
  - "[[GOAL]]"
code_paths: []
test_paths: []
---

# GUIDELINES

<!-- IA: conventions de code, revue, et où vit le style. -->

## Stack

- API PHP
- Front Nuxt (Vue) compilé
- MySQL distant
- Tailwind = primitives (couleur, spacing, type)
- SCSS spécifique = composants / objets **dans les SFC Vue ou fichiers adjacents sous `app/`**, jamais sous `docs/` ni `api/` — [[scss-nomenclature]]

## Style

Les tokens humains sont dans [[TOKENS]]. Les classes nommées (`scss_namespace`) se déclarent dans le Vue/SCSS sous `app/`, et se lient depuis une spec via `code_paths` + `scss_namespace` ([[EDGES]], relation `STYLES`).

## Specs

Toute fonctionnalité suit [[PROCESS]]. Les arêtes de process sont uniquement celles du YAML (et `@spec` / `@glossary` dans le code).

## Voir aussi

- [[GOAL]]
- [[GITFLOW]]
- [[PROCESS]]
