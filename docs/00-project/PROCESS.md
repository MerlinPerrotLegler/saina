---
id: process
type: process
status: accepted
lang: fr
aliases: []
tags:
  - project
relates_to:
  - "[[GOAL]]"
  - "[[GUIDELINES]]"
  - "[[GITFLOW]]"
  - "[[EDGES]]"
  - "[[GLOSSARY-SUMMARY]]"
prev:
  - "[[GOAL]]"
next: []
glossary: []
governed_by:
  - "[[GOAL]]"
code_paths: []
test_paths: []
---

# PROCESS

Pipeline spec → code. Chaque étape est une note (`type` ci-dessous), liée par `prev` / `next` (`ADVANCES`) et `governed_by` (`GOVERNS`). Détail des arêtes : [[EDGES]].

1. **discussion** ([[tpl-discussion]]) — besoin, options, décision
2. **fsd** ([[tpl-fsd]]) — Functional Spec (quoi / pour qui)
3. **tsd** ([[tpl-tsd]]) — Technical Spec (comment : API PHP, Nuxt, MySQL)
4. **user-doc** ([[tpl-user-doc]]) — doc utilisateur (brouillon, puis à jour après code)
5. **task** ([[tpl-task]]) — découpage et suivi ([[GITFLOW]])
6. **test** ([[tpl-test]]) — WriteTests (`test_paths`) avant ou avec le code
7. **code** — fichiers dans `code_paths` (annotation `@spec` vers la note fsd)
8. **user** — la note user-doc relue et `status: done`

Famille d’une fonctionnalité = même `feature_id`. Templates : dossier `templates/` (`tpl-*`).

## Voir aussi

- [[GOAL]]
- [[GUIDELINES]]
- [[GITFLOW]]
- [[GLOSSARY-SUMMARY]]
- [[TOKENS]]
