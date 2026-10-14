---
id: tsd-quiz-style
type: tsd
status: accepted
lang: fr
feature_id: quiz-style
aliases:
  - quiz
  - quizz
tags:
  - specs
relates_to:
  - "[[fsd-quiz-style]]"
prev:
  - "[[fsd-quiz-style]]"
next:
  - "[[user-doc-quiz-style]]"
glossary:
  - "[[style-de-bijou]]"
governed_by:
  - "[[GOAL]]"
  - "[[GUIDELINES]]"
code_paths:
  - app/pages/quiz.vue
  - app/components/quiz/Flow.vue
  - app/composables/useQuiz.js
  - shared/utils/quiz.js
  - server/api/quiz.post.js
  - server/utils/quiz-db.js
test_paths:
  - scripts/quiz-score.test.mjs
---

# TSD — Quiz style de bijou

Comment [[fsd-quiz-style]] est porté dans le site Nuxt déjà en place. Le dépôt n’a pas d’application PHP séparée : la collecte est la route Nitro `server/api/quiz.post.js`, le stockage est MySQL.

## Front Nuxt

Une page, `app/pages/quiz.vue`, rend [[QuizFlow]]. `pages:extend` dans `nuxt.config.ts` lui ajoute les adresses :

- `/quiz`
- `/quiz/question/:n`
- `/quiz/coordonnees`
- `/quiz/resultat/:style`

`/sur-mesure` redirige vers `/quiz`. L’état (réponses, champs, soumission) est dans `sessionStorage` (`siana-quiz-v2`). Le score et le garde-fou d’adresse sont des fonctions pures dans `shared/utils/quiz.js` : `scoreQuiz`, `stylesFor`, `quizDestination`.

Le bouton de rendez-vous lit `NUXT_PUBLIC_APPOINTMENT_URL`. Sans valeur, ce n’est pas un lien. Les pages `/quiz/resultat/*` envoient `noindex`.

## API

`POST /api/quiz`. Corps : prénom, nom, e-mail, date, neuf libellés, champ leurre `societe`. Le serveur recalcule le style à partir des libellés. Il refuse un libellé hors liste, un e-mail ou une date invalides. Au plus huit envois par adresse IP et par dix minutes. Le leurre rempli répond sans rien enregistrer.

## MySQL

Si `MYSQL_HOST`, `MYSQL_USER` et `MYSQL_DATABASE` sont posés, insertion dans `quiz_leads` (table créée au premier envoi) : prénom, nom, e-mail, date, style, libellés JSON. Sinon, ou si MySQL ne répond pas, une ligne dans `data/quiz-leads.jsonl`.
