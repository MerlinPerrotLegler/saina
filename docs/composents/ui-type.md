---
id: ui-type
type: styleguide
status: draft
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
scss_namespace: c-title
---

# Titres

Quatre niveaux de texte repris partout sur la maquette. Chacun est optionnel.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| kicker | string | Petite capitale : « Collections », « À propos », « Bijoux & talismans » |
| title | string | Titre serif |
| lead | string | Paragraphe |
| label | string | Légende sous un signe, en capitales |

## Classes

- `c-kicker` — capitales, suivi 0,22 em
- `c-title` — serif de thème, titre de section
- `c-lead` — paragraphe, largeur plafonnée
- `c-label` — légende de signe, capitales
