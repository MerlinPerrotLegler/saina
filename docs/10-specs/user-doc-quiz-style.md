---
id: user-doc-quiz-style
type: user-doc
status: done
lang: fr
feature_id: quiz-style
aliases:
  - quiz
  - quizz
tags:
  - specs
relates_to:
  - "[[fsd-quiz-style]]"
  - "[[tsd-quiz-style]]"
prev:
  - "[[tsd-quiz-style]]"
next: []
glossary:
  - "[[style-de-bijou]]"
governed_by:
  - "[[GOAL]]"
code_paths:
  - app/pages/quiz.vue
test_paths: []
---

# Quiz — pour le visiteur

Neuf questions, puis vos coordonnées, puis un des quatre styles de bijou.

## Étapes

1. Ouvrir **Sur-mesure**, ou aller sur `/quiz`.
2. **Commencer le quiz**. Choisir une réponse, puis **Continuer**. **Retour** garde la réponse.
3. À la dernière question, indiquer une couleur de pierre.
4. Renseigner prénom, nom, e-mail et date du mariage ou de l’événement, puis **Découvrir mon style**.
5. Lire le style. **Parlons de votre projet** mène au rendez-vous quand le lien est configuré.

Rouvrir `/quiz` commence un autre passage. Le résultat ne s’affiche pas si le formulaire n’a pas été validé dans cette visite.
