---
id: task-quiz-style
type: task
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
  - "[[tsd-quiz-style]]"
next:
  - "[[test-quiz-style]]"
glossary: []
governed_by:
  - "[[GITFLOW]]"
  - "[[GOAL]]"
code_paths:
  - app/pages/quiz.vue
  - app/components/quiz/Flow.vue
  - server/api/quiz.post.js
test_paths:
  - scripts/quiz-score.test.mjs
---

# Tâche — quiz style

Branche `quiz`. Le parcours de [[fsd-quiz-style]] tient dans le site Nuxt, avec collecte MySQL.

## Suivi

- [x] Adresses `/quiz`, questions, formulaire, résultat
- [x] Score, départage, messages du formulaire
- [x] Soumission des neuf libellés
- [x] CTA de rendez-vous seulement si l’URL est fournie
- [x] Vérification du parcours dans le navigateur
