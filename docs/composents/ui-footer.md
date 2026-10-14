---
id: ui-footer
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-logo]]"
  - "[[ui-type]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Footer.vue
scss_namespace: c-footer
---

# Pied de page

Fond pourpre, quatre colonnes : marque, liens rapides, informations, contact. Le téléphone et le courriel de la planche sont ceux de la carte de visite.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| logo | slot | [[ui-logo]] |
| blurb | string | Phrase sous la marque |
| columns | `{ title, links: { label, href }[] }[]` | Liens rapides et informations |
| contact | `{ label, href }[]` | Courriel `mailto:anaisgrazzini@gmail.com`, téléphone `tel:+33629679367` |
| legal | string | Ligne de copyright |

## Classes

- `c-footer` — fond `--color-pourpre`, texte crème
- `c-footer-grid` — quatre colonnes
- `c-brand` — [[ui-logo]]
- `c-lead` — [[ui-type]], phrase sous la marque
- `c-footer-title` — titre de colonne, capitales
- `c-footer-link` — lien de liste
- `c-footer-legal` — ligne basse, filet crème
