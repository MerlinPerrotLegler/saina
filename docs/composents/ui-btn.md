---
id: ui-btn
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
  - app/components/ui/Btn.vue
scss_namespace: c-btn
---

# Bouton

Pastille en capitales. La flèche est dessinée par `c-btn::after`.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| label | string | Libellé. Maquette : « Découvrir l’univers », « Explorer », « S’inscrire » |
| href | string | Cible si le bouton est un lien |
| type | `button` ou `submit` | Si le bouton est dans un formulaire |
| variant | `soft` `primary` `light` `inverse` | Rendu |

| Variante | Où la maquette s’en sert | Classe |
| --- | --- | --- |
| soft | Sur la photo du hero | `c-btn-soft` |
| primary | Action pleine, terracotta | `c-btn-primary` |
| light | Sur une photo de carte | `c-btn-light` |
| inverse | Sur fond clair, encre pourpre | `c-btn-inverse` |

## Classes

- `c-btn` — forme, suivi, capitales, flèche
- `c-btn-soft` — fond crème, encre pourpre
- `c-btn-primary` — fond terracotta, texte crème
- `c-btn-light` — fond blanc cassé, encre pourpre
- `c-btn-inverse` — fond pourpre, texte crème
