---
id: ui-logo
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
  - app/components/ui/Logo.vue
scss_namespace: c-brand
---

# Logo

Wordmark « Sïa / Na » en serif. Dans l’en-tête et le pied il reste petit. Dans le hero il est agrandi par `c-hero .c-brand`.

La maquette ajoute le cartouche « Bijoux & talismans » via [[ui-type]] (`c-kicker`). Le SVG de marque, lui, porte la baseline « Joaillerie de transmission » : on ne le substitue pas à ce cartouche.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| lines | `string[]` | Lignes du mot. Maquette : « Sïa », « Na » |
| href | string | Cible du lien, en général l’accueil |

## Classes

- `c-brand` — serif, interligne serré, deux lignes
