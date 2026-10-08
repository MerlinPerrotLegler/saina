---
id: guidelines
type: guideline
status: accepted
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
  - "[[fsd-quiz-style]]"
  - "[[fsd-a-propos]]"
prev: []
next: []
glossary:
  - "[[scss-nomenclature]]"
  - "[[siana]]"
  - "[[style-de-bijou]]"
governed_by:
  - "[[GOAL]]"
code_paths: []
test_paths: []
---

# GUIDELINES

## Stack

- API PHP
- Front Nuxt (Vue) compilé
- MySQL distant
- Tailwind = primitives (couleur, spacing, type) — voir [[TOKENS]]
- SCSS spécifique = composants / objets dans les SFC Vue ou fichiers adjacents sous `app/`, jamais sous `docs/` ni `api/` — [[scss-nomenclature]]

Le cahier du quiz n’impose ni framework, ni CMS, ni System.io. Quand le code commencera, il suivra cette stack. Ne pas introduire une dépendance tierce juste pour porter les quatre styles.

## Voix

- Ton premium, émotionnel, simple, mixte.
- On parle d’un [[style-de-bijou]], pas d’un type de personne.
- Le tutoiement et le vouvoiement sont encore mélangés dans les textes sources du quiz (questions en « vous », résultats et question pierre en « tu »). Un seul registre pour tout le parcours : point ouvert dans [[discussion-quiz-style]].
- Ne pas demander de donnée personnelle sans usage décrit dans la spec.

## Qualité

Si des contraintes se contredisent, dans cet ordre :

1. Exactitude du résultat
2. Simplicité du parcours
3. Clarté des interactions
4. Collecte correcte des informations
5. Accessibilité
6. Performance
7. Esthétique et animations

Le mobile est le support prioritaire du quiz : une main, pas de zoom, pas de défilement horizontal, cibles confortables, progression visible.

## Marque et fichiers

- Identité visuelle : [[TOKENS]] et `assets/brand/`.
- Exports web (PNG, JPEG, PDF) à la racine de chaque dossier de marque.
- Sources Illustrator (`.ai`) dans `assets/brand/**/sources/`.
- Le vault `docs/` ne contient pas les binaires.
- Ne pas inventer d’URL, de couleur ou de texte juridique absent des notes.

## Specs

Toute fonctionnalité suit [[PROCESS]]. Les arêtes de process sont uniquement celles du YAML (et `@spec` / `@glossary` dans le code).

## Voir aussi

- [[GOAL]]
- [[GITFLOW]]
- [[PROCESS]]
- [[TOKENS]]
