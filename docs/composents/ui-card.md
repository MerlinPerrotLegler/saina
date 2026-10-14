---
id: ui-card
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-btn]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Cards.vue
scss_namespace: c-card
---

# Carte média

Photo avec un titre et un lien en bas. La maquette en aligne trois : Colliers, Boucles d’oreilles, Bracelets. L’image se pose par `--c-card-image`, le cadrage par `--c-card-pos`.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| items | `{ image, title, href, label }[]` | Cartes de la rangée |
| image | URL | Fond, via `--c-card-image`. URL absolue, résolue depuis la feuille CSS |
| title | string | « Colliers », « Boucles d’oreilles », « Bracelets » |
| href | string | Cible de « Explorer » |
| label | string | Libellé du bouton, « Explorer » |

## Classes

- `c-cards` — grille de trois
- `c-card` — photo, dégradé bas, texte crème
- `c-card-title` — serif, capitales
- `c-btn` `c-btn-light` — [[ui-btn]]
