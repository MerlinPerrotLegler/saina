---
id: ui-page
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[TOKENS]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/layouts/default.vue
scss_namespace: c-page
---

# Page

Fond crème et encre pourpre de l’accueil. Empile les régions, sans contenu propre.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| header | slot | [[ui-header]] |
| hero | slot | [[ui-hero]] |
| values | slot | [[ui-values]] |
| sections | slot | intros, cartes, bandeau, citations, infolettre |
| footer | slot | [[ui-footer]] |

## Classes

- `c-page` — fond `--color-creme`, texte `--color-pourpre`, sans-serif de thème
