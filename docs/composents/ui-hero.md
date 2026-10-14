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

Photo pleine largeur, texte crème à gauche. L’image se pose par la propriété `--c-hero-image`.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| image | URL | Fond, via `--c-hero-image`. Le chemin est lu depuis la feuille CSS : utiliser une URL absolue (`/assets/brand/photo-anais.jpeg` sur la planche) |
| logo | slot | [[ui-logo]] |
| kicker | string | « Bijoux & talismans » |
| title | string | Quatre lignes : Transmission, Héritage, Joaillerie &, Pierres précieuses |
| lead | string | Chapô |
| cta | `{ label, href }` | Bouton `soft` |

## Classes

- `c-hero` — photo, dégradé pourpre à gauche, texte crème
- `c-hero-copy` — colonne de texte, 22 rem
- `c-hero-title` — serif, capitales, suivi large
- `c-brand` — wordmark agrandi dans ce bloc
- `c-kicker` `c-lead` — [[ui-type]]
- `c-btn` `c-btn-soft` — [[ui-btn]]
