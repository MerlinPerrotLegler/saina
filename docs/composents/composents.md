---
id: composents
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
  - maquette
relates_to:
  - "[[TOKENS]]"
  - "[[ui-page]]"
  - "[[ui-header]]"
  - "[[ui-logo]]"
  - "[[ui-icon-btn]]"
  - "[[ui-type]]"
  - "[[ui-btn]]"
  - "[[ui-field]]"
  - "[[ui-hero]]"
  - "[[ui-values]]"
  - "[[ui-section-intro]]"
  - "[[ui-card]]"
  - "[[ui-split]]"
  - "[[ui-band]]"
  - "[[ui-quote]]"
  - "[[ui-newsletter]]"
  - "[[ui-footer]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/pages/index.vue
scss_namespace: c-page
---

# Composents

Inventaire de l’accueil tel que la maquette le montre. Les classes sont dans `app/assets/css/components.css`, importées par Tailwind (`app/assets/css/main.css`, couche `components`) et démontrées dans `styleguide/index.html`.

Les textes de la planche sont ceux de la maquette, pas une spec de contenu. Deux écarts à trancher plus tard : le cartouche « Bijoux & talismans » (le fichier logo dit « Joaillerie de transmission »), et les zones boutique, collections, témoignages, infolettre, que [[GOAL]] tenait hors du premier périmètre.

## Classes

| Classe | Note |
| --- | --- |
| `c-page` | [[ui-page]] |
| `c-header` `c-nav` `c-nav-link` `c-tools` | [[ui-header]] |
| `c-brand` | [[ui-logo]] |
| `c-icon-btn` | [[ui-icon-btn]] |
| `c-kicker` `c-title` `c-lead` `c-label` | [[ui-type]] |
| `c-btn` `c-btn-soft` `c-btn-primary` `c-btn-light` `c-btn-inverse` | [[ui-btn]] |
| `c-field` | [[ui-field]] |
| `c-hero` `c-hero-copy` `c-hero-title` | [[ui-hero]] |
| `c-values` `c-value` | [[ui-values]] |
| `c-section` `c-section-head` | [[ui-section-intro]] |
| `c-cards` `c-card` `c-card-title` | [[ui-card]] |
| `c-split` `c-split-media` `c-split-copy` | [[ui-split]] |
| `c-band` `c-band-item` `c-band-icon` `bg-creme` `text-terracotta` `bg-terracotta` `text-creme` | [[ui-band]] |
| `c-quotes` `c-quote` `c-quote-text` `c-stars` `c-quote-author` | [[ui-quote]] |
| `c-newsletter` `c-newsletter-form` | [[ui-newsletter]] |
| `c-footer` `c-footer-grid` `c-footer-title` `c-footer-link` `c-footer-legal` | [[ui-footer]] |

La flèche des boutons est le `::after` de `c-btn`, pas une classe.
