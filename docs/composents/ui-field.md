---
id: ui-field
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-newsletter]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Field.vue
scss_namespace: c-field
---

# Champ

Saisie en pastille. La maquette ne l’emploie que pour le courriel de l’infolettre.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| name | string | Nom du champ |
| type | string | `email` dans la maquette |
| label | string | Nom accessible |
| placeholder | string | « Votre adresse e-mail » |
| required | booléen | Présence de l’attribut |

## Classes

- `c-field` — fond blanc, filet pourpre, texte pourpre
