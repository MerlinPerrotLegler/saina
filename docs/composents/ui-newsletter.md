---
id: ui-newsletter
type: styleguide
status: implementing
lang: fr
aliases: []
tags:
  - composant
relates_to:
  - "[[composents]]"
  - "[[ui-type]]"
  - "[[ui-field]]"
  - "[[ui-btn]]"
prev: []
next: []
glossary: []
governed_by:
  - "[[GUIDELINES]]"
code_paths:
  - app/assets/css/components.css
  - app/components/ui/Newsletter.vue
scss_namespace: c-newsletter
---

# Infolettre

Titre centré, chapô, champ courriel et bouton. L’envoi n’a pas encore de cible : la maquette s’arrête au formulaire.

## Inputs

| Input | Type | Rôle |
| --- | --- | --- |
| title | string | « Rejoignez l’univers Sïana » |
| lead | string | Promesse d’inscription |
| field | slot | [[ui-field]] |
| submitLabel | string | « S’inscrire » |
| action | URL | Cible du formulaire, encore ouverte |

## Classes

- `c-newsletter` — bloc centré
- `c-newsletter-form` — champ et bouton sur une ligne
- `c-title` `c-lead` — [[ui-type]]
- `c-field` — [[ui-field]]
- `c-btn` `c-btn-inverse` — [[ui-btn]]
