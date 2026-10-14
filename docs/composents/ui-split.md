---
id: ui-split
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
  - "[[fsd-a-propos]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Split.vue
scss_namespace: c-split
---

# Bloc partagé

Photo à gauche, texte à droite. La maquette y place « Une démarche sensible et authentique ». L’image se pose par `--c-split-image`.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| image | URL | Panneau gauche, via `--c-split-image`. URL absolue, résolue depuis la feuille CSS |
| imageLabel | string | Nom accessible de la photo |
| kicker | string | « À propos » |
| title | string | Titre |
| lead | string | Texte |
| cta | `{ label, href, variant }` | « En savoir plus », variante `primary` |

## Classes

- `c-split` — deux colonnes
- `c-split-media` — photo couvrante
- `c-split-copy` — colonne de texte
- `c-kicker` `c-title` `c-lead` — [[ui-type]]
- `c-btn` `c-btn-primary` — [[ui-btn]]
