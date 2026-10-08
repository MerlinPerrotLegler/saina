---
id: discussion-quiz-style
type: discussion
status: accepted
lang: fr
feature_id: quiz-style
aliases:
  - quiz
  - quizz
tags:
  - specs
relates_to:
  - "[[GOAL]]"
  - "[[style-de-bijou]]"
prev: []
next:
  - "[[fsd-quiz-style]]"
glossary:
  - "[[style-de-bijou]]"
  - "[[style-chaleureux]]"
  - "[[style-elegant]]"
  - "[[style-sensible]]"
  - "[[style-instinctif]]"
governed_by:
  - "[[GOAL]]"
code_paths: []
test_paths: []
---

# Discussion — quiz style de bijou

## Contexte

Quiz d’acquisition pour [[siana]] : « Quel style de bijou vous ressemble ? ». Neuf questions, un formulaire, puis un des quatre [[style-de-bijou]]. Le résultat ne s’affiche qu’après les coordonnées. Suite souhaitée : rendez-vous avec Anaïs, URL encore absente.

Le cahier source mélange un prompt de développement et la spec. Seul le comportement, les contenus et les critères d’acceptation sont repris dans [[fsd-quiz-style]]. Aucune techno n’y est figée ; la stack projet reste [[GUIDELINES]].

## Options

- Continuer seulement après un bouton « Continuer ».
- Enchaîner dès la sélection d’une réponse.

Les deux sont acceptables. Contrainte commune : ne jamais perdre une réponse, y compris via le retour navigateur.

- Tutoiement partout, ou vouvoiement partout.
- Textes de résultat actuels (« Tu es une personne… ») ou reformulation qui ne décrit qu’un style.

## Décision

- Quatre styles, noms mixtes, score +1 par réponse, départage déterministe. Détail dans [[fsd-quiz-style]].
- Le formulaire bloque le résultat. Champs : prénom, nom, e-mail, date de mariage ou d’événement.
- Pas d’URL de rendez-vous inventée. Pas de partage social en v1. Pas de pop-up d’abandon.
- **Non tranché — registre.** Les questions 1 à 8 vouvoient. La question pierre et les titres de résultat tutoient. Les paragraphes de résultat disent « Tu es une personne… », ce qui contredit la règle « ne pas diagnostiquer une personnalité ». Les deux formulations sont conservées telles quelles dans la FSD jusqu’à un choix explicite. En cas de conflit à l’implémentation, l’ordre de [[GUIDELINES]] place l’exactitude du résultat et la clarté avant l’esthétique ; il ne tranche pas ce conflit de copie.
- **Non tranché — indexation** des pages de résultat, **conservation** des réponses après la session, **texte juridique** du consentement e-mail.
