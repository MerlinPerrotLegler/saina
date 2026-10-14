---
id: ui-values
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-type]]"
  - "[[TOKENS]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Values.vue
scss_namespace: c-values
---

# Repères

Rangée de quatre signes, sous le hero. Le signe est une `icone` (voir [[TOKENS]]), recolorée par le texte du bloc via `currentColor`.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| items | `{ icon, label }[]` | Quatre entrées. Maquette : soleil / Pierres naturelles, motif / Créations artisanales, cœur / Bijoux porteurs de sens, lune / Inspirés par la nature |

`icon` est l’identifiant du SVG (`icone-soleil`, `icone-motif`, `icone-coeur`, `icone-lune`).

## Classes

- `c-values` — grille de quatre, centrée
- `c-value` — un signe et sa légende
- `c-label` — [[ui-type]]
- `icone` + `icone-*` — le signe, hors de cette feuille
