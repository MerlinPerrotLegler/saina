---
id: fsd-quiz-style
type: fsd
status: accepted
lang: fr
feature_id: quiz-style
aliases:
  - quiz
  - quizz
tags:
  - specs
relates_to:
  - "[[discussion-quiz-style]]"
  - "[[style-de-bijou]]"
  - "[[TOKENS]]"
prev:
  - "[[discussion-quiz-style]]"
next: []
glossary:
  - "[[style-de-bijou]]"
  - "[[style-chaleureux]]"
  - "[[style-elegant]]"
  - "[[style-sensible]]"
  - "[[style-instinctif]]"
governed_by:
  - "[[GOAL]]"
  - "[[GUIDELINES]]"
code_paths: []
test_paths: []
---

# FSD — Quiz « Quel style de bijou vous ressemble ? »

Spec de comportement, de contenu et d’acceptation. Pas de stack, pas de CMS, pas de System.io. L’URL de rendez-vous n’est pas dans cette note : ne pas en inventer.

Le résultat nomme un [[style-de-bijou]] : [[style-chaleureux]], [[style-elegant]], [[style-sensible]], [[style-instinctif]]. Jamais « La Chaleureuse », « L’Élégante », « La Sensible », « L’Instinctive ».

## Acteurs

- Visiteur, surtout sur mobile.
- Anaïs / [[siana]], destinataire du rendez-vous et des coordonnées.

## Parcours

1. Introduction
2. Questions 1 à 8
3. Question 9 (pierre, bonus)
4. Formulaire de coordonnées
5. Calcul
6. Page de résultat
7. CTA de rendez-vous

Le résultat n’apparaît jamais avant un formulaire valide. Après validation : contrôler les champs, finaliser le score, afficher tout de suite le bon résultat. Pas d’écran de chargement décoratif.

Progression visible, y compris sur mobile : « Question 1 sur 9 », et une barre si elle aide. La question pierre est la 9. La progression avance à chaque question.

## Introduction

Courte.

> Quel style de bijou vous ressemble ?
>
> Quelques questions pour découvrir l'univers joaillier qui vous correspond le mieux.
>
> Répondez spontanément. Il n'y a pas de bonne ou de mauvaise réponse.

CTA : **Commencer le quiz**.

## Questions 1 à 8

Une seule réponse. L’état sélectionné est visible sans reposer seulement sur la couleur. États : normal, survol (desktop), sélectionné, focus clavier, erreur si l’on tente de continuer sans réponse.

Deux enchaînements sont permis : bouton **Continuer**, ou passage automatique. Dans les deux cas, un retour laisse la réponse déjà choisie, et le score est recalculé si elle change. Le bouton retour du navigateur ne doit ni effacer le parcours, ni soumettre deux fois, ni fausser le résultat, ni remettre le quiz à zéro sans que ce soit compréhensible.

Chaque réponse des questions 1 à 8 vaut **1 point** pour un seul style.

| Question | [[style-chaleureux]] | [[style-elegant]] | [[style-sensible]] | [[style-instinctif]] |
| --- | --- | --- | --- | --- |
| 1. Quelle couleur de métal vous attire naturellement ? | Or jaune | Or gris | Or rose | Platine |
| 2. Quelle finition vous attire le plus ? | Brillante / clinquante | Mate | Lumineuse | Brute |
| 3. Quelle énergie vous attire spontanément ? | Feu | Air | Eau | Terre |
| 4. Quelle forme vous attire le plus ? | Forme libre | Ovale | Ronde | Carrée |
| 5. Quel univers esthétique vous correspond le plus ? | Ornemental | Minimaliste | Symbolique | Architectural |
| 6. Comment aimez-vous porter un bijou ? | Pour les célébrations | Tous les jours | Comme une œuvre | Comme un talisman |
| 7. Quelle émotion souhaitez-vous transmettre à travers un bijou ? | Joie | Calme | Passion | Liberté |
| 8. Quelle symbolique vous parle le plus ? | Amitié | Passage de vie | Amour | Force personnelle |

## Question 9 — la pierre

> Si tu étais une pierre, quelle serait ta couleur ?

Dix choix visuels (pierre, pastille ou matière), chacun avec sa symbolique. Un seul choix. +1 au style indiqué. Cette question sert aussi au départage, via le point qu’elle ajoute.

| Couleur | Symbolique | Style |
| --- | --- | --- |
| Blanc | Pureté, simplicité, clarté | [[style-elegant]] |
| Bleu | Sagesse, intelligence, loyauté | [[style-sensible]] |
| Vert | Équilibre, renouveau, altruisme | [[style-instinctif]] |
| Rose | Romance, tendresse, espièglerie | [[style-sensible]] |
| Rouge | Amour, instinct, envie | [[style-chaleureux]] |
| Violet | Mystère, spiritualité, intuition | [[style-sensible]] |
| Jaune | Joie, sociabilité, spontanéité | [[style-chaleureux]] |
| Orange | Vitalité, créativité, originalité | [[style-chaleureux]] |
| Marron | Tradition, savoir-faire, fiabilité | [[style-instinctif]] |
| Gris | Conformité, autorité, professionnalisme | [[style-elegant]] |
| Noir | Élégance, raffinement, puissance | [[style-elegant]] |

La liste source compte dix intentions et onze lignes (le noir est la onzième). Les onze couleurs ci-dessus font partie du contenu tant qu’une n’est pas retirée explicitement.

## Score

Quatre compteurs : Chaleureux, Élégant, Sensible, Instinctif. Maximum théorique : 9.

Le résultat est le score le plus haut, après la question 9.

Égalité restante, déterministe, invisible pour le visiteur (pas de message d’anomalie, pas de choix au hasard, pas « le premier du tableau ») :

1. Les points de la question 9 sont déjà dans les scores.
2. On relit les réponses de la question 8 vers la question 1.
3. Le premier style rencontré qui fait encore partie des ex æquo gagne.

Comme chaque question ne désigne qu’un style, cette relecture départage toujours dès qu’au moins une réponse des questions 1 à 8 tombe dans le groupe ex æquo.

## Formulaire

Titre possible : **Votre style est presque révélé…**

> Pour découvrir votre résultat et recevoir une expérience personnalisée autour de votre style joaillier, renseignez vos coordonnées.

Champs obligatoires :

- Prénom
- Nom
- Adresse e-mail, format valide
- Date du mariage ou de l'événement, saisie comme une date valide

Erreurs compréhensibles, à côté du champ. Les valeurs déjà saisies restent. Un formulaire incomplet ou invalide n’ouvre pas le résultat.

Consentement : information claire sur l’usage de l’e-mail et, si un accord marketing est demandé, case non précochée. Le texte juridique exact n’est pas encore rédigé.

CTA : **Découvrir mon style**. Variante : **Découvrir le style de bijou qui me correspond**.

Après envoi, le bouton montre un traitement en cours et refuse une seconde soumission.

Données collectées, et rien d’autre sans justification dans cette note : prénom, nom, e-mail, date, et les réponses si on décide de les garder. Cette conservation au-delà de la session n’est pas tranchée ([[discussion-quiz-style]]). Traitement conforme à la protection des données.

## Résultats

Page plus immersive que les questions : le style, une identité visuelle propre, le texte, éventuellement des images de bijoux de cet univers, le CTA. Quatre pages distinctes.

Ouvertures :

- **Ton style est chaleureux.**
- **Ton style est élégant.**
- **Ton style est sensible.**
- **Ton style est instinctif.**

Éviter « Vous êtes une personne chaleureuse. » Les paragraphes sources, eux, commencent encore par « Tu es une personne… ». Les garder mot pour mot tant que [[discussion-quiz-style]] n’a pas tranché. Le registre tu/vous doit ensuite être le même partout, y compris le titre.

### Style chaleureux

> Tu es une personne solaire, expressive et chaleureuse. Les matières lumineuses comme l’or poli accompagnent ta joie de vivre. Tu es sensible aux bijoux qui célèbrent les moments forts.

### Style élégant

> Tu es une personne élégante, discrète et profondément sensible. Tu aimes les bijoux fins, portés au quotidien avec simplicité, dont la modernité révèle une présence affirmée.

### Style sensible

> Tu es une personne douce, sensible et rêveuse. Tu aimes les courbes fluides et délicates ; les créations porteuses de sens, qui expriment ta créativité et ton univers intérieur.

### Style instinctif

> Tu es une personne instinctive, affirmée et authentique. Tu aimes les matières brutes, les textures marquées et les lignes structurées, porteuses d’ancrage et d’une élégance intemporelle.

CTA sur chaque résultat : **Parlons de votre projet**. Accompagnement possible :

> Votre style vous ressemble. Et si nous imaginions maintenant le bijou qui vous ressemble vraiment ?

Le bouton pointe vers l’URL fournie plus tard. Pas d’URL de remplacement.

## Expérience

- Mobile prioritaire : une main, sans zoom, sans scroll horizontal, cibles larges, type lisible, progression visible. Puis tablette, portable, grand écran. Contenu centré. Les choix se réorganisent selon la largeur.
- Clavier, lecteur d’écran, vrais contrôles. Contraste suffisant. Images décoratives ignorées par le lecteur d’écran. Images informatives avec alternative (les pierres, en particulier).
- Animations courtes, discrètes, utiles (changement de question, sélection, progression, apparition du résultat). Respect de `prefers-reduced-motion`. Jamais au détriment de la vitesse ou de l’accessibilité.
- Pas d’images trop lourdes, pas de saut de mise en page au chargement.

## Mesure

Événements nommés de façon stable, sans freiner le parcours :

- affichage du quiz
- démarrage
- progression
- réponse à une question
- arrivée à la question 9
- affichage du formulaire
- formulaire commencé
- formulaire validé
- résultat de chaque style
- clic sur « Parlons de votre projet »
- prise de rendez-vous, si elle est mesurable

Repérer les abandons (début, milieu, question pierre, formulaire) sans pop-up.

## SEO et partage

Page d’acquisition : titre, meta description, titres hiérarchisés, URL lisible, texte naturel. Ne pas optimiser les réponses pour les moteurs. L’indexation des pages de résultat reste à décider.

Partage du résultat : hors v1. S’il arrive, le message est du type « Mon style de bijou est… », sans prénom, nom, e-mail, date, ni détail des scores.

## Critères d’acceptation

- 9 questions, textes exacts, bon style pour chaque réponse
- score, bonus et égalités déterministes
- résultat inaccessible avant formulaire valide
- prénom, nom, e-mail et date collectés ; e-mail et date invalidés clairement
- quatre résultats, bon texte, CTA vers l’URL fournie (pas une URL inventée)
- responsive, accessible clavier, réponses conservées au retour
- pas de double soumission incohérente
- événements de mesure principaux
- aucune techno imposée par cette note

Cas à vérifier avant de considérer la feature faite :

| Cas | Attendu |
| --- | --- |
| A à D | Un parcours évident vers chaque style : score, texte, CTA |
| E | Égalité voulue, départage conforme à la règle |
| F | Retour puis changement de réponse, score final juste |
| G | Formulaire incomplet : pas de résultat |
| H | E-mail invalide : message sur le champ |
| I | Date invalide : message sur le champ |
| J, K | Parcours complet mobile et desktop |
| L | Parcours complet au clavier |

## Hors scope

- Catégories genrées, diagnostic de personnalité comme résultat affiché
- Champs personnels supplémentaires
- URL de rendez-vous inventée
- System.io, tags d’un outil tiers, ou une architecture imposée par ce cahier
- Partage social en v1
- Animations qui ralentissent, réponses lisibles seulement par la couleur
- Pop-ups d’abandon

Priorités si deux règles se gênent : [[GUIDELINES]].
