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

Avec `imageWhole`, la photo est affichée en entier et calée à l’opposé du texte (à droite). Le reste du bloc prend `bgColor`, sinon `fill`. Le texte reste crème : choisir un fond sombre.

`imageDesktop` remplace `image` à partir de 861px. `imageMobile` la remplace en dessous. `bgImage` prolonge le bord gauche de la photo sur le fond, pour continuer le mur derrière le texte. En dessous de 860px, si `imageMobile` est fourni, c’est le bord haut de cette photo qui est prolongé.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| image | URL | Photo du hero, si `imageDesktop` est absent |
| imageDesktop | URL | Photo affichée au-dessus de 860px |
| imageMobile | URL | Photo affichée jusqu’à 860px |
| bgImage | URL | Source du fond : son bord gauche est étiré sur la largeur du bloc |
| bgColor | couleur CSS | Fond de repli, prioritaire sur `fill` |
| imageWhole | booléen | Affiche la photo en entier, à l’opposé du texte |
| fill | couleur CSS | Fond du reste du bloc quand `imageWhole` est actif et que `bgColor` est absent. Défaut : pourpre |
| logo | slot | [[ui-logo]] |
| kicker | string | « Bijoux & talismans » |
| title | string | Quatre lignes : Transmission, Héritage, Joaillerie &, Pierres précieuses |
| lead | string | Chapô |
| cta | `{ label, href }` | Bouton `soft` |

## Classes

- `c-hero` — photo, dégradé pourpre à gauche, texte crème
- `c-hero-whole` — photo entière à droite, fond `bgColor` ou `fill` sur le reste
- `c-hero-wall` — bord gauche de `bgImage`, étiré derrière le texte
- `c-hero-copy` — colonne de texte, 22 rem
- `c-hero-title` — serif, capitales, suivi large
- `c-brand` — wordmark agrandi dans ce bloc
- `c-kicker` `c-lead` — [[ui-type]]
- `c-btn` `c-btn-soft` — [[ui-btn]]
