---
id: ui-section-intro
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-type]]"
  - "[[ui-btn]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/SectionIntro.vue
scss_namespace: c-section
---

# Intro de section

Kicker, titre, texte, et parfois un bouton. Sert l’ouverture « Collections » et le titre des témoignages.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| kicker | string | « Collections », « Témoignages » |
| title | string | Titre serif |
| lead | string | Paragraphe, optionnel |
| cta | `{ label, href, variant }` | Optionnel. Maquette collections : bouton `primary` |

## Classes

- `c-section` — marge verticale de la région
- `c-section-head` — colonne de texte, 34 rem
- `c-kicker` `c-title` `c-lead` — [[ui-type]]
- `c-btn` et une variante — [[ui-btn]], seulement si `cta` est fourni
