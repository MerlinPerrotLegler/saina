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

Spec fonctionnelle complète : parcours, textes, score, formulaire, résultats, critères d’acceptation. Pas de stack, pas de CMS, pas de System.io. L’URL de rendez-vous et le texte juridique de l’e-mail ne sont pas dans cette note : ne pas en inventer. Décisions et points ouverts : [[discussion-quiz-style]].

Le résultat nomme un [[style-de-bijou]] : [[style-chaleureux]], [[style-elegant]], [[style-sensible]], [[style-instinctif]]. Jamais « La Chaleureuse », « L’Élégante », « La Sensible », « L’Instinctive ». Le visiteur ne voit pas, pendant les questions, quel style une réponse alimente.

Le score est une fonction des neuf réponses courantes. Changer une réponse remplace l’ancienne. Aucun compteur n’est incrémenté au fil de l’eau.

## Acteurs

- Visiteur, surtout sur mobile, une main.
- Anaïs / [[siana]], destinataire du rendez-vous et de la soumission.

## Parcours

Une page d’entrée, puis des étapes dans l’historique du navigateur. Chaque étape restaure les réponses déjà données.

1. Introduction — `/quiz`
2. Questions 1 à 8 — `/quiz/question/1` … `/quiz/question/8`
3. Question 9, la pierre — `/quiz/question/9`
4. Formulaire — `/quiz/coordonnees`
5. Calcul à la validation, sans écran d’attente décoratif
6. Résultat — `/quiz/resultat/chaleureux`, `/quiz/resultat/elegant`, `/quiz/resultat/sensible` ou `/quiz/resultat/instinctif`

Le résultat n’apparaît qu’après un formulaire valide de cette session. Ouvrir une adresse de résultat sans cette soumission ramène à `/quiz`, sans le texte de résultat.

Progression sur les questions : « Question 1 sur 9 », jusqu’à « Question 9 sur 9 », plus une barre qui reprend la même information. Le formulaire et le résultat ne sont pas une dixième question.

## Introduction

> Quel style de bijou vous ressemble ?
>
> Quelques questions pour découvrir l'univers joaillier qui vous correspond le mieux.
>
> Répondez spontanément. Il n'y a pas de bonne ou de mauvaise réponse.

CTA : **Commencer le quiz**. Il mène à la question 1.

Titre de page et titre SEO : « Quel style de bijou vous ressemble ? ». Meta description : la deuxième phrase de l’introduction. Page indexable.

## Questions

Une question par écran. Une seule réponse, groupe de boutons radio. Le libellé de la question est le titre du groupe.

États de chaque réponse : normal, survol (desktop), sélectionné, focus clavier. L’état sélectionné se voit sans la couleur seule (indicateur en plus du contraste).

Bouton **Continuer**. Sans réponse, il reste sur l’écran et affiche : « Choisissez une réponse pour continuer. » Le focus va sur ce message. Choisir une réponse retire le message.

Bouton **Retour** à partir de la question 2 et sur le formulaire. Depuis la question 1, **Retour** ramène à l’introduction. Le retour laisse la réponse déjà choisie. Le bouton retour du navigateur fait de même : il ne soumet pas le formulaire, ne remet pas le quiz à zéro, et ne crée pas une deuxième soumission.

**Continuer** sur la question 9 mène au formulaire.

### Questions 1 à 8

Chaque réponse vaut **1 point** pour un seul style.

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

### Question 9 — la pierre

> Si tu étais une pierre, quelle serait ta couleur ?

Onze choix. Chacun montre une pastille de la couleur, le nom de la couleur, et la symbolique en texte visible. La pastille est décorative pour le lecteur d’écran : le nom accessible est la couleur et la symbolique. Un seul choix. +1 au style indiqué. Cette question sert aussi au départage, via le point qu’elle ajoute.

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

La liste source comptait dix intentions et onze lignes. Les onze couleurs font partie du contenu.

## Score

Quatre compteurs, dérivés des neuf réponses au moment de la validation : Chaleureux, Élégant, Sensible, Instinctif. Maximum : 9.

Le résultat est le score le plus haut.

Égalité, déterministe, invisible pour le visiteur (pas de message d’anomalie, pas de tirage au sort, pas « le premier du tableau ») :

1. Les points de la question 9 sont déjà dans les scores. En cas d’égalité, la question 9 n’a pas désigné un style du groupe ex æquo : sinon ce style serait seul en tête.
2. On relit les réponses de la question 8 vers la question 1.
3. Le premier style rencontré qui fait encore partie des ex æquo gagne.

Comme chaque question ne désigne qu’un style, et que tous les points des ex æquo viennent des questions 1 à 8, cette relecture départage toujours.

### Parcours de contrôle

| Cas | Réponses (Q1 → Q9) | Scores C / É / S / I | Résultat |
| --- | --- | --- | --- |
| A | Or jaune, Brillante / clinquante, Feu, Forme libre, Ornemental, Pour les célébrations, Joie, Amitié, Rouge | 9 / 0 / 0 / 0 | Chaleureux |
| B | Or gris, Mate, Air, Ovale, Minimaliste, Tous les jours, Calme, Passage de vie, Blanc | 0 / 9 / 0 / 0 | Élégant |
| C | Or rose, Lumineuse, Eau, Ronde, Symbolique, Comme une œuvre, Passion, Amour, Bleu | 0 / 0 / 9 / 0 | Sensible |
| D | Platine, Brute, Terre, Carrée, Architectural, Comme un talisman, Liberté, Force personnelle, Vert | 0 / 0 / 0 / 9 | Instinctif |
| E | Or jaune, Mate, Feu, Ovale, Ornemental, Tous les jours, Passion, Amour, Vert | 3 / 3 / 2 / 1 | Élégant : égalité Chaleureux / Élégant, la relecture s’arrête à la question 6 (Tous les jours) |
| F | Parcours B, puis retour à la question 1, Or jaune à la place d’Or gris, pierre Blanc inchangée | 1 / 8 / 0 / 0 | Élégant. L’ancienne réponse « Or gris » ne compte plus |

## Formulaire

Titre : **Votre style est presque révélé…**

> Pour découvrir votre résultat et recevoir une expérience personnalisée autour de votre style joaillier, renseignez vos coordonnées.

Champs, dans cet ordre, étiquette visible, obligatoires :

| Champ | Règle | Message |
| --- | --- | --- |
| Prénom | Après trim, au moins un caractère | Indiquez votre prénom. |
| Nom | Après trim, au moins un caractère | Indiquez votre nom. |
| Adresse e-mail | Forme `texte@domaine.tld` | Vide : « Indiquez votre adresse e-mail. » Invalide : « Cette adresse e-mail n'est pas valide. » |
| Date du mariage ou de l'événement | Une date de calendrier réelle, passée ou à venir | Vide : « Indiquez la date du mariage ou de l'événement. » Impossible : « Cette date n'est pas valide. » |

Les messages sont à côté du champ concerné. Les valeurs déjà saisies restent. Un formulaire incomplet ou invalide reste sur `/quiz/coordonnees` et n’ouvre aucun résultat.

CTA : **Découvrir mon style**. Pendant l’envoi : libellé « Découverte en cours… », bouton inactif, une seule soumission.

Emplacement prévu pour une phrase sur l’usage de l’e-mail. Le texte juridique exact n’est pas rédigé : ne pas l’inventer, ne pas afficher de case marketing à sa place. Cette phrase manquante bloque la mise en production, pas la description du parcours.

Données de la soumission, et rien d’autre : prénom, nom, e-mail, date, style calculé, neuf réponses (libellé choisi). La durée de conservation au-delà de la session reste ouverte ([[discussion-quiz-style]]). Les événements de mesure ne contiennent ni prénom, ni nom, ni e-mail, ni date.

## Résultats

Quatre présentations. Chacune a son adresse, le style, une identité visuelle propre, le texte, le CTA. Des images de bijoux de cet univers peuvent s’y ajouter quand elles existent ; sans elles, la page tient avec le texte. Une image informative a une alternative. Une image décorative est ignorée par le lecteur d’écran.

Ouvertures, telles quelles :

- **Ton style est chaleureux.**
- **Ton style est élégant.**
- **Ton style est sensible.**
- **Ton style est instinctif.**

Le registre tu/vous et les paragraphes « Tu es une personne… » restent les textes sources tant que [[discussion-quiz-style]] n’a pas tranché. Les afficher mot pour mot.

### Style chaleureux

> Tu es une personne solaire, expressive et chaleureuse. Les matières lumineuses comme l’or poli accompagnent ta joie de vivre. Tu es sensible aux bijoux qui célèbrent les moments forts.

### Style élégant

> Tu es une personne élégante, discrète et profondément sensible. Tu aimes les bijoux fins, portés au quotidien avec simplicité, dont la modernité révèle une présence affirmée.

### Style sensible

> Tu es une personne douce, sensible et rêveuse. Tu aimes les courbes fluides et délicates ; les créations porteuses de sens, qui expriment ta créativité et ton univers intérieur.

### Style instinctif

> Tu es une personne instinctive, affirmée et authentique. Tu aimes les matières brutes, les textures marquées et les lignes structurées, porteuses d’ancrage et d’une élégance intemporelle.

CTA sur chaque résultat : **Parlons de votre projet**. Texte d’accompagnement :

> Votre style vous ressemble. Et si nous imaginions maintenant le bijou qui vous ressemble vraiment ?

Le bouton pointe vers l’URL de rendez-vous fournie dans la configuration. Sans cette URL, le bouton n’est pas un lien et n’ouvre aucune autre page.

Après le résultat, l’interface n’a pas de bouton « Recommencer ». Un nouvel essai commence en rouvrant `/quiz`. Le retour navigateur depuis le résultat ne renvoie pas le formulaire.

Ces quatre adresses sont en `noindex` tant que l’indexation n’est pas tranchée.

## Expérience

- Mobile d’abord : une main, sans zoom, sans scroll horizontal, cibles larges, type lisible, progression visible. Puis tablette, portable, grand écran. Contenu centré. Les choix passent sur plusieurs lignes quand la largeur l’exige.
- Clavier complet : tabulation, flèches dans le groupe de réponses, entrée pour continuer. Lecteur d’écran sur de vrais contrôles. Contraste suffisant.
- Au changement d’étape, le focus va sur le titre de l’étape.
- Animations courtes, discrètes, utiles (changement de question, sélection, progression, apparition du résultat). Avec `prefers-reduced-motion`, le changement d’étape est immédiat.
- Pastilles de pierre en aplat, sans image lourde. Pas de saut de mise en page au chargement.
- Le quiz est une page du site. Les blocs de l’accueil (cartes, infolettre, témoignages) n’en font pas partie.

## Mesure

Événements stables, sans freiner le parcours. Propriétés : numéro de question, libellé de réponse, style. Jamais les coordonnées.

| Événement | Moment |
| --- | --- |
| `quiz_view` | Affichage de `/quiz` |
| `quiz_start` | Clic sur « Commencer le quiz » |
| `quiz_progress` | Affichage d’une question, avec son numéro |
| `quiz_answer` | **Continuer** avec une réponse, question et libellé |
| `quiz_form_view` | Affichage du formulaire |
| `quiz_form_start` | Premier champ modifié |
| `quiz_form_submit` | Formulaire accepté, avec le style |
| `quiz_result` | Affichage du résultat, avec le style |
| `quiz_cta_appointment` | Clic sur « Parlons de votre projet » |
| `quiz_appointment` | Prise de rendez-vous, seulement si l’outil de rendez-vous la signale |

Les abandons se lisent par l’absence de l’événement suivant (début, milieu, question 9, formulaire). Pas de pop-up.

## Critères d’acceptation

- 9 questions, textes exacts, onze pierres, bon style pour chaque réponse
- score calculé depuis les réponses courantes ; cas A à F
- résultat inaccessible avant formulaire valide, y compris en ouvrant l’adresse du résultat
- prénom, nom, e-mail et date collectés ; messages des cas G, H, I sur le champ
- soumission unique : second clic et retour navigateur ne créent pas un second envoi
- quatre résultats, textes exacts, CTA vers l’URL fournie quand elle existe
- parcours mobile, desktop et clavier
- réponses encore là après Retour, retour navigateur et rechargement de la session
- événements du tableau, sans coordonnées dedans
- aucune techno imposée par cette note

| Cas | Attendu |
| --- | --- |
| A à D | Parcours du tableau : score, texte, CTA |
| E | Égalité 3 / 3, résultat élégant par la question 6 |
| F | Retour, changement de la question 1, l’ancienne réponse ne compte plus |
| G | Prénom vide : message « Indiquez votre prénom. », pas de résultat |
| H | E-mail `anais@` : « Cette adresse e-mail n'est pas valide. » |
| I | Date 31/02/2026, ou date vide : message du champ, pas de résultat |
| J, K | Parcours A complet sur mobile et sur desktop |
| L | Parcours A complet au clavier, sans souris |
| M | `/quiz/resultat/chaleureux` sans soumission : retour à `/quiz`, sans le paragraphe chaleureux |
| N | Double activation de « Découvrir mon style » : une seule soumission |

## Hors scope

- Catégories genrées, ou un résultat affiché comme diagnostic de personnalité au-delà des paragraphes sources cités ici
- Champs personnels autres que les quatre champs
- URL de rendez-vous inventée, texte juridique inventé, case marketing sans ce texte
- System.io, tags d’un outil tiers, ou une architecture imposée par ce cahier
- Partage social. S’il arrive plus tard, le message est du type « Mon style de bijou est… », sans prénom, nom, e-mail, date, ni détail des scores
- Animations qui ralentissent, réponses lisibles seulement par la couleur
- Pop-ups d’abandon
- Durée de conservation après la session, et le choix final tu/vous

Priorités si deux règles se gênent : [[GUIDELINES]].
