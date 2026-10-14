---
id: ui-quote
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-section-intro]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Quotes.vue
scss_namespace: c-quote
---

# Citation

Carte blanche sous le titre « Vos mots, ma plus belle récompense ». Le guillemet ouvrant est le `::before` de `c-quote`. Les trois citations de la maquette (Claire, Marine, Élodie) sont des exemples de planche, pas des avis collectés.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| items | `{ text, author, rating }[]` | Cartes de la rangée |
| text | string | Citation |
| author | string | Signature, avec le tiret |
| rating | nombre | Étoiles, 5 dans la maquette |

Le titre au-dessus de la rangée est une [[ui-section-intro]] sans bouton.

## Classes

- `c-quotes` — grille de trois
- `c-quote` — carte blanche, guillemet terracotta
- `c-quote-text` — le texte
- `c-stars` — étoiles terracotta
- `c-quote-author` — signature
