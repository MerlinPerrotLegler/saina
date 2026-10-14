---
id: ui-icon-btn
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-header]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/IconBtn.vue
scss_namespace: c-icon-btn
---

# Bouton icône

Outil de l’en-tête : recherche, compte, panier. Le dessin est un SVG en `currentColor`, pas une classe de couleur.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| label | string | Nom accessible (`aria-label`) |
| href | string | Cible |
| icon | slot | SVG 24×24, trait `currentColor` |

## Classes

- `c-icon-btn` — pastille 2,1 rem, SVG 1,1 rem
