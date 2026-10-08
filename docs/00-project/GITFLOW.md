---
id: gitflow
type: gitflow
status: accepted
lang: fr
aliases: []
tags:
  - project
relates_to:
  - "[[GOAL]]"
  - "[[GUIDELINES]]"
  - "[[PROCESS]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GOAL]]"
code_paths: []
test_paths: []
---

# GITFLOW

Convention du kit, déjà amorcée par la branche `develop`. Les notes `task` s’y rattachent via `governed_by`.

## Branches

- `main` — état livrable
- `develop` — intégration
- `feature/<feature_id>` — une fonctionnalité, le slug reprend le `feature_id` de la famille de notes (ex. `feature/quiz-style`)

## Commits

Message court, en français, à l’impératif, centré sur le pourquoi.

## Pull requests

Une PR implémente une note `task` et la spec `fsd` / `tsd` liée. Pas de PR de code applicatif tant que la tâche n’existe pas.

## Voir aussi

- [[GOAL]]
- [[GUIDELINES]]
- [[PROCESS]]
