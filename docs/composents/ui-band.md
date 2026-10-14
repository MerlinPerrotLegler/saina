---
id: ui-band
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
  - app/components/ui/Band.vue
  - app/components/ui/BandIcon.vue
scss_namespace: c-band
---

# Bandeau

Quatre étapes et un libellé en capitales. Chaque `icon` est le nom d’un fichier de `assets/brand/icones`, sans l’extension. La couleur ne vit pas dans `c-band` : elle vient de `bg-<couleur>` et `text-<couleur>`. Un filet sépare les étapes. Sous 860 px, la grille passe à deux lignes de deux.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| items | `{ icon, label }[]` | `icon` : `icone-soleil`, `icone-lune`, `icone-coeur`, `icone-points`, `icone-s`. `label` est un texte ou une liste de lignes |
| label | string | Nom accessible du bandeau |

## Classes

- `c-band` — grille de quatre, sans couleur propre
- `c-band-item` — signe, libellé, filet à gauche sauf sur le premier
- `c-band-icon` — SVG de `assets/brand/icones`, aplat en `currentColor`
- `bg-creme` `text-terracotta` — bandeau clair
- `bg-terracotta` `text-creme` — bandeau brique
