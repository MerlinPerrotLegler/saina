---
id: ui-header
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-logo]]"
  - "[[ui-icon-btn]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Header.vue
scss_namespace: c-header
---

# En-tête

Barre haute : marque à gauche, liens au centre, outils à droite.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| logo | slot | [[ui-logo]] |
| items | `{ label, href }[]` | Navigation. La maquette montre Histoire, Boutiques, L’univers, Bijoux, Sur-mesure, À propos, Contact |
| tools | slot | [[ui-icon-btn]] — recherche, compte, panier |

## Classes

- `c-header` — barre, fond crème éclairci
- `c-nav` — rangée de liens, centrée, qui passe à la ligne
- `c-nav-link` — libellé en capitales, suivi serré
- `c-tools` — groupe d’icônes, calé à droite
