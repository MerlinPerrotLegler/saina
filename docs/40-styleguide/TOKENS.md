---
id: tokens
type: styleguide
status: accepted
lang: fr
aliases:
  - charte
  - palette
tags:
  - styleguide
relates_to:
  - "[[GUIDELINES]]"
  - "[[scss-nomenclature]]"
  - "[[GOAL]]"
  - "[[siana]]"
  - "[[composents]]"
prev: []
next: []
glossary:
  - "[[scss-nomenclature]]"
  - "[[siana]]"
governed_by:
  - "[[GOAL]]"
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/tokens.scss
scss_namespace: tokens
---

# TOKENS

Couleurs et typo lues sur `assets/brand/palette.jpeg` et sur les polices embarquées dans `assets/brand/brandboard.pdf`. Les jetons vivent dans `app/assets/css/tokens.scss`. Les classes de la maquette d’accueil vivent dans `app/assets/css/components.css`, indexées par [[composents]]. Les binaires ne vivent pas dans ce vault.

## Couleur

Noms tels que sur les fichiers (logos, motifs, icônes). Hex relevés sur la planche `palette.jpeg`.

| Jeton | Hex | Classe | Rôle |
| --- | --- | --- | --- |
| primary | `#000000` | `color-primary` | Forme par défaut (`var(--primary)`) |
| secondary | `#ffffff` | `color-secondary` | Cadre / fond par défaut (`var(--secondary)`) |
| pourpre | `#3e1f24` | `color-pourpre` | Brun-pourpre |
| creme | `#f5e0cb` | `color-creme` | Crème |
| terracotta | `#ae6868` | `color-terracotta` | Rose-brique |
| indigo | `#a19ebb` | `color-indigo` | Gris-lavande |
| corail | `#fb907c` | `color-corail` | Corail / saumon |

Une classe `color-*` remplace primary et secondary par la teinte. Une classe `text-*` fixe `color`, donc le `currentColor` des lettres. Page de démonstration : `styleguide/index.html`.

## Typo

Polices réellement embarquées dans le brandboard :

| Famille | Graisses vues | Usage probable |
| --- | --- | --- |
| Condor | Light, Regular | Titres, wordmark |
| Futura PT | Light, Book | Texte |
| DM Mono | Regular | Valeurs hexadécimales du board |
| Muli | Regular | Libellés du board |
| Raleway | Medium | Libellés du board |

Condor et Futura PT sont les familles de marque. Muli, Raleway et DM Mono servent la mise en page du board ; ne pas les promouvoir au site tant qu’une spec UI ne les retient pas.

Spacing, radius et ombres ne figurent pas dans les sources.

## Logo

Wordmark en deux lignes : grand S, puis « ïa » / « na ». Baseline, quand elle est présente : **JOAILLERIE DE TRANSMISSION**.

Un SVG par forme, dans `assets/brand/logos/`. Les `.ai` restent dans `sources/`.

- `icone-logo.svg` — wordmark, lettres en `currentColor`
- `icone-logo-baseline.svg` — wordmark + baseline, lettres en `currentColor`
- `icone-logo-icon.svg` — cadre `var(--secondary)` + wordmark `currentColor`
- `icone-logo-sub-title.svg` — cadre `var(--secondary)` + wordmark + baseline en `currentColor`

## Signes et motifs

`assets/brand/icones/` — un SVG par signe (`icone-lune.svg`, `icone-soleil.svg`, `icone-coeur.svg`, `icone-points.svg`, `icone-s.svg`). Le tracé est `fill="var(--primary)"`.

`assets/brand/motifs/icone-motif.svg` — la trame, même remplissage.

Usage :

```html
<i class="icone icone-lune color-corail">
  <svg><use href="#icone-lune"/></svg>
</i>
<i class="icone icone-logo-sub-title color-creme text-corail">
  <svg><use href="#icone-logo-sub-title"/></svg>
</i>
```

Sources Illustrator : `assets/brand/**/sources/`.

## Supports déjà posés

- Portrait d’Anaïs : `assets/brand/photo-anais-full.jpeg` — page [[fsd-a-propos]]
- Cartes de visite pourpre et terracotta : `assets/brand/cartes-de-visite/` — SVG recto et `*-verso.svg`, plus le PDF d’impression
- Planche complète : `assets/brand/brandboard.pdf`

## Voir aussi

- [[GUIDELINES]]
- [[scss-nomenclature]]
- [[siana]]
