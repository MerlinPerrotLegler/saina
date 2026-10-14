---
id: ui-hero
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-logo]]"
  - "[[ui-type]]"
  - "[[ui-btn]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Hero.vue
scss_namespace: c-hero
---

# Hero

Photo pleine largeur, texte crème à gauche. Par défaut la photo est recadrée (`object-fit: cover`).

Avec `imageWhole`, la photo est affichée en entier et calée à l’opposé du texte (à droite). Le reste du bloc prend la couleur `fill`. Le texte reste crème : choisir un fond sombre.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| image | URL | Photo du hero |
| imageWhole | booléen | Affiche la photo en entier, à l’opposé du texte |
| fill | couleur CSS | Fond du reste du bloc quand `imageWhole` est actif. Défaut : pourpre |
| logo | slot | [[ui-logo]] |
| kicker | string | « Bijoux & talismans » |
| title | string | Quatre lignes : Transmission, Héritage, Joaillerie &, Pierres précieuses |
| lead | string | Chapô |
| cta | `{ label, href }` | Bouton `soft` |

## Classes

- `c-hero` — photo, dégradé pourpre à gauche, texte crème
- `c-hero-whole` — photo entière à droite, fond `fill` sur le reste
- `c-hero-copy` — colonne de texte, 22 rem
- `c-hero-title` — serif, capitales, suivi large
- `c-brand` — wordmark agrandi dans ce bloc
- `c-kicker` `c-lead` — [[ui-type]]
- `c-btn` `c-btn-soft` — [[ui-btn]]
