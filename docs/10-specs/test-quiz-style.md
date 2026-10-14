---
id: test-quiz-style
type: test
status: implementing
lang: fr
feature_id: quiz-style
aliases: []
tags:
  - specs
relates_to:
  - "[[fsd-quiz-style]]"
  - "[[tsd-quiz-style]]"
prev:
  - "[[task-quiz-style]]"
next: []
glossary: []
governed_by:
  - "[[GOAL]]"
code_paths: []
test_paths:
  - scripts/quiz-score.test.mjs
---

# Tests — quiz style

`npm run test:quiz`. Les cas A à F, les messages e-mail et date, et le refus d’un résultat sans soumission.

## Cas

- A à D : neuf réponses d’un seul style
- E : égalité chaleureux / élégant, départage à la question 6, résultat élégant
- F : remplacer Or gris par Or jaune ne compte plus l’ancienne réponse
- E-mail vide, e-mail `anais@`, date vide, date `2026-02-31`
- `/quiz/resultat/chaleureux` sans soumission renvoie vers `/quiz`
