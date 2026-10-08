
# PROMPT DE DÉVELOPPEMENT
## Quiz interactif — « Quel style de bijou vous ressemble ? »

Tu es chargé de concevoir et développer un quiz interactif premium pour **Sïana Joaillerie**.

Ce document constitue la **spécification fonctionnelle, UX et UI de référence**.

## Règle fondamentale

**Ne fais aucune hypothèse concernant la technologie, la stack, le CMS, le framework, l'hébergement ou les outils utilisés.**

La solution technique est libre et relève du développeur.

Ce document décrit uniquement :

- le comportement fonctionnel attendu ;
- le parcours utilisateur ;
- les contenus ;
- les règles de calcul ;
- l'UX ;
- l'UI ;
- les interactions ;
- les validations ;
- les résultats attendus ;
- les contraintes de qualité ;
- les critères d'acceptation.

Ne pas introduire de dépendance à une technologie particulière.

---

# 1. OBJECTIF DU PRODUIT

Créer un quiz permettant à un visiteur de découvrir **quel style de bijou correspond le mieux à son univers**.

Le quiz doit être :

- élégant ;
- premium ;
- ludique ;
- émotionnel ;
- simple à comprendre ;
- rapide à compléter ;
- agréable sur mobile ;
- cohérent avec l'univers d'une maison de joaillerie ;
- suffisamment qualitatif pour donner envie d'aller plus loin dans un projet de bijou sur mesure.

Le quiz ne doit **jamais donner l'impression de diagnostiquer ou catégoriser la personnalité de l'utilisateur**.

Le résultat porte toujours sur :

> **son style de bijou**

et non sur « le type de personne » auquel il appartiendrait.

---

# 2. LES 4 STYLES

Les quatre résultats sont strictement nommés :

### ☀️ Style Chaleureux

### ✨ Style Élégant

### 🌊 Style Sensible

### 🌿 Style Instinctif

Les noms doivent rester **neutres et mixtes**.

Ne jamais utiliser :

- « La Chaleureuse »
- « L'Élégante »
- « La Sensible »
- « L'Instinctive »

Le résultat doit être formulé par exemple :

> **Ton style est chaleureux.**

ou :

> **Votre style de bijou est chaleureux.**

Le ton final doit être cohérent sur l'ensemble du parcours. Si le site utilise le tutoiement, utiliser le tutoiement partout dans le quiz. Si le vouvoiement est retenu, l'utiliser partout.

---

# 3. DESCRIPTION DES 4 STYLES

## ☀️ STYLE CHALEUREUX

Texte :

> Tu es une personne solaire, expressive et chaleureuse. Les matières lumineuses comme l’or poli accompagnent ta joie de vivre. Tu es sensible aux bijoux qui célèbrent les moments forts.

Univers associé :

- chaleur ;
- lumière ;
- éclat ;
- générosité ;
- expression ;
- célébration ;
- matières lumineuses ;
- or poli ;
- bijoux expressifs.

---

## ✨ STYLE ÉLÉGANT

Texte :

> Tu es une personne élégante, discrète et profondément sensible. Tu aimes les bijoux fins, portés au quotidien avec simplicité, dont la modernité révèle une présence affirmée.

Univers associé :

- élégance ;
- sobriété ;
- finesse ;
- modernité ;
- minimalisme ;
- simplicité ;
- intemporalité ;
- bijoux du quotidien.

---

## 🌊 STYLE SENSIBLE

Texte :

> Tu es une personne douce, sensible et rêveuse. Tu aimes les courbes fluides et délicates ; les créations porteuses de sens, qui expriment ta créativité et ton univers intérieur.

Univers associé :

- émotion ;
- douceur ;
- poésie ;
- créativité ;
- courbes ;
- fluidité ;
- symbolique ;
- bijoux porteurs de sens.

---

## 🌿 STYLE INSTINCTIF

Texte :

> Tu es une personne instinctive, affirmée et authentique. Tu aimes les matières brutes, les textures marquées et les lignes structurées, porteuses d’ancrage et d’une élégance intemporelle.

Univers associé :

- authenticité ;
- caractère ;
- ancrage ;
- matières brutes ;
- textures ;
- lignes structurées ;
- force ;
- élégance intemporelle.

---

# 4. STRUCTURE GÉNÉRALE DU PARCOURS

Le parcours utilisateur doit être :

**Introduction**

↓

**Question 1**

↓

**Question 2**

↓

**Question 3**

↓

**Question 4**

↓

**Question 5**

↓

**Question 6**

↓

**Question 7**

↓

**Question 8**

↓

**Question bonus**

↓

**Formulaire de coordonnées**

↓

**Calcul / détermination du résultat**

↓

**Page de résultat**

↓

**CTA prise de rendez-vous**

---

# 5. PAGE D'INTRODUCTION

Créer une introduction courte avant de commencer le quiz.

Elle doit expliquer simplement le principe.

Exemple de formulation :

> **Quel style de bijou vous ressemble ?**
>
> Quelques questions pour découvrir l'univers joaillier qui vous correspond le mieux.
>
> Répondez spontanément. Il n'y a pas de bonne ou de mauvaise réponse.

CTA :

> **Commencer le quiz**

Le bouton doit être immédiatement identifiable.

Éviter une introduction trop longue.

---

# 6. INDICATEUR DE PROGRESSION

Afficher une progression pendant le quiz.

Exemple :

> **Question 1 sur 9**

avec éventuellement une barre de progression.

La progression doit être visuellement claire sur mobile.

Elle doit évoluer à chaque question.

La question bonus compte comme la question 9.

---

# 7. COMPORTEMENT DES QUESTIONS

Chaque question possède **4 réponses principales**, sauf la question bonus qui possède 10 réponses.

Une seule réponse peut être sélectionnée.

L'utilisateur doit pouvoir comprendre immédiatement qu'il s'agit d'un choix unique.

Après sélection :

- l'état sélectionné doit être clairement visible ;
- l'interaction doit être accessible ;
- le bouton de continuation doit être évident.

Deux approches UX sont possibles :

### Option A

Sélection d'une réponse puis bouton :

> **Continuer**

### Option B

La sélection d'une réponse entraîne automatiquement le passage à la question suivante.

Privilégier l'approche qui donne le meilleur confort mobile et la meilleure compréhension.

Ne jamais créer une navigation qui pourrait faire perdre accidentellement une réponse.

---

# 8. QUESTION 1 — COULEUR DE MÉTAL

Question :

> **Quelle couleur de métal vous attire naturellement ?**

Réponses :

### A — Or jaune

→ Style Chaleureux

### B — Or gris

→ Style Élégant

### C — Or rose

→ Style Sensible

### D — Platine

→ Style Instinctif

---

# 9. QUESTION 2 — BRILLANCE

Question :

> **Quelle finition vous attire le plus ?**

Réponses :

### A — Brillante / clinquante

→ Style Chaleureux

### B — Mate

→ Style Élégant

### C — Lumineuse

→ Style Sensible

### D — Brute

→ Style Instinctif

---

# 10. QUESTION 3 — ÉNERGIE

Question :

> **Quelle énergie vous attire spontanément ?**

Réponses :

### A — Feu

→ Style Chaleureux

### B — Air

→ Style Élégant

### C — Eau

→ Style Sensible

### D — Terre

→ Style Instinctif

---

# 11. QUESTION 4 — FORME

Question :

> **Quelle forme vous attire le plus ?**

Réponses :

### A — Forme libre

→ Style Chaleureux

### B — Ovale

→ Style Élégant

### C — Ronde

→ Style Sensible

### D — Carrée

→ Style Instinctif

---

# 12. QUESTION 5 — STYLE

Question :

> **Quel univers esthétique vous correspond le plus ?**

Réponses :

### A — Ornemental

→ Style Chaleureux

### B — Minimaliste

→ Style Élégant

### C — Symbolique

→ Style Sensible

### D — Architectural

→ Style Instinctif

---

# 13. QUESTION 6 — PORT DU BIJOU

Question :

> **Comment aimez-vous porter un bijou ?**

Réponses :

### A — Pour les célébrations

→ Style Chaleureux

### B — Tous les jours

→ Style Élégant

### C — Comme une œuvre

→ Style Sensible

### D — Comme un talisman

→ Style Instinctif

---

# 14. QUESTION 7 — ÉMOTION

Question :

> **Quelle émotion souhaitez-vous transmettre à travers un bijou ?**

Réponses :

### A — Joie

→ Style Chaleureux

### B — Calme

→ Style Élégant

### C — Passion

→ Style Sensible

### D — Liberté

→ Style Instinctif

---

# 15. QUESTION 8 — SYMBOLIQUE

Question :

> **Quelle symbolique vous parle le plus ?**

Réponses :

### A — Amitié

→ Style Chaleureux

### B — Passage de vie

→ Style Élégant

### C — Amour

→ Style Sensible

### D — Force personnelle

→ Style Instinctif

---

# 16. QUESTION 9 — QUESTION BONUS : LA PIERRE

Cette question possède une double fonction :

1. apporter une dimension émotionnelle et joaillière au quiz ;
2. servir à départager certains résultats.

Question :

> **Si tu étais une pierre, quelle serait ta couleur ?**

Présenter les couleurs sous forme de choix visuels, idéalement avec une représentation élégante de pierre, de pastille ou de matière colorée.

Chaque couleur doit être accompagnée de sa symbolique.

---

## BLANC

> **Pureté, simplicité, clarté**

→ +1 Style Élégant

---

## BLEU

> **Sagesse, intelligence, loyauté**

→ +1 Style Sensible

---

## VERT

> **Équilibre, renouveau, altruisme**

→ +1 Style Instinctif

---

## ROSE

> **Romance, tendresse, espièglerie**

→ +1 Style Sensible

---

## ROUGE

> **Amour, instinct, envie**

→ +1 Style Chaleureux

---

## VIOLET

> **Mystère, spiritualité, intuition**

→ +1 Style Sensible

---

## JAUNE

> **Joie, sociabilité, spontanéité**

→ +1 Style Chaleureux

---

## ORANGE

> **Vitalité, créativité, originalité**

→ +1 Style Chaleureux

---

## MARRON

> **Tradition, savoir-faire, fiabilité**

→ +1 Style Instinctif

---

## GRIS

> **Conformité, autorité, professionnalisme**

→ +1 Style Élégant

---

## NOIR

> **Élégance, raffinement, puissance**

→ +1 Style Élégant

---

# 17. RÈGLE DE SCORING

Il existe 4 compteurs :

- `Chaleureux`
- `Élégant`
- `Sensible`
- `Instinctif`

Chaque réponse aux questions 1 à 8 ajoute exactement **1 point** au style associé.

La question 9 ajoute également **1 point** au style associé à la couleur sélectionnée.

Score maximum théorique par style :

**9 points**

Le résultat est le style ayant obtenu le score le plus élevé.

---

# 18. GESTION DES ÉGALITÉS

Le comportement en cas d'égalité doit être déterministe.

La question bonus doit contribuer au départage.

Exemple :

Après les 8 premières questions :

- Chaleureux = 3
- Élégant = 3
- Sensible = 1
- Instinctif = 1

Si la couleur choisie à la question bonus correspond au Style Chaleureux :

- Chaleureux = 4
- Élégant = 3

Résultat :

> Style Chaleureux

### Cas particulier

Il faut également prévoir le cas extrêmement particulier où une égalité subsiste après la question bonus.

Ne jamais laisser le système sélectionner arbitrairement le premier résultat.

Dans ce cas, prévoir une règle déterministe et documentée.

La règle recommandée est d'utiliser les réponses des questions précédentes comme départage secondaire, en remontant de la question 8 vers la question 1 jusqu'à obtenir une préférence.

Cette règle doit être invisible pour l'utilisateur : il ne doit pas avoir l'impression qu'il existe une anomalie dans son résultat.

---

# 19. CONSERVATION DES RÉPONSES

Le parcours doit conserver les réponses pendant toute la session du quiz.

Si une navigation « retour » est proposée, les réponses précédentes doivent rester sélectionnées.

L'utilisateur doit pouvoir revenir à une question précédente sans perdre son parcours.

Le score doit être recalculé correctement si une réponse est modifiée.

---

# 20. FORMULAIRE AVANT LE RÉSULTAT

⚠️ **Le résultat ne doit jamais être affiché avant cette étape.**

Après la question 9, afficher une page de collecte d'informations.

Titre possible :

> **Votre style est presque révélé…**

Texte :

> Pour découvrir votre résultat et recevoir une expérience personnalisée autour de votre style joaillier, renseignez vos coordonnées.

Champs obligatoires :

### Prénom

### Nom

### Adresse e-mail

### Date du mariage ou de l'événement

La date doit être saisie sous forme de date.

Le champ doit accepter une date valide.

Le formulaire doit afficher des messages d'erreur compréhensibles si une donnée obligatoire est absente ou invalide.

---

# 21. CONSENTEMENT EMAIL

Le formulaire doit respecter les règles applicables à la collecte d'une adresse e-mail.

Prévoir, lorsque nécessaire, une information claire concernant l'utilisation de l'adresse e-mail et le consentement marketing.

Ne pas précocher abusivement une case de consentement.

Le texte juridique exact devra être adapté au cadre légal et aux choix marketing de Sïana Joaillerie.

---

# 22. BOUTON DU FORMULAIRE

CTA recommandé :

> **Découvrir mon style**

Alternative :

> **Découvrir le style de bijou qui me correspond**

Le bouton doit être clairement identifiable.

Après validation :

1. valider les données ;
2. finaliser le calcul ;
3. afficher le bon résultat.

---

# 23. PAGE DE RÉSULTAT

Créer une expérience de résultat distincte pour chacun des quatre styles.

Le résultat doit commencer par une phrase forte.

### ☀️

> **Ton style est chaleureux.**

### ✨

> **Ton style est élégant.**

### 🌊

> **Ton style est sensible.**

### 🌿

> **Ton style est instinctif.**

Éviter :

> « Vous êtes une personne chaleureuse. »

Le résultat doit parler du **style**, pas enfermer l'utilisateur dans une catégorie de personnalité.

---

# 24. CONTENU DES RÉSULTATS

## STYLE CHALEUREUX

Texte :

> Tu es une personne solaire, expressive et chaleureuse. Les matières lumineuses comme l’or poli accompagnent ta joie de vivre. Tu es sensible aux bijoux qui célèbrent les moments forts.

---

## STYLE ÉLÉGANT

Texte :

> Tu es une personne élégante, discrète et profondément sensible. Tu aimes les bijoux fins, portés au quotidien avec simplicité, dont la modernité révèle une présence affirmée.

---

## STYLE SENSIBLE

Texte :

> Tu es une personne douce, sensible et rêveuse. Tu aimes les courbes fluides et délicates ; les créations porteuses de sens, qui expriment ta créativité et ton univers intérieur.

---

## STYLE INSTINCTIF

Texte :

> Tu es une personne instinctive, affirmée et authentique. Tu aimes les matières brutes, les textures marquées et les lignes structurées, porteuses d’ancrage et d’une élégance intemporelle.

---

# 25. DESIGN DE LA PAGE DE RÉSULTAT

La page de résultat doit être plus immersive que les pages de questions.

Elle doit idéalement comporter :

1. le style ;
2. une identité visuelle propre au style ;
3. le texte descriptif ;
4. éventuellement une sélection d'images de bijoux correspondant à l'univers ;
5. un appel à l'action vers la prise de rendez-vous.

Le résultat doit donner envie de se projeter dans un bijou réel.

---

# 26. CTA PRISE DE RENDEZ-VOUS

Chaque résultat doit comporter un bouton permettant de prendre rendez-vous avec Anaïs / Sïana Joaillerie.

CTA recommandé :

> **Parlons de votre projet**

Texte d'accompagnement possible :

> Votre style vous ressemble. Et si nous imaginions maintenant le bijou qui vous ressemble vraiment ?

Le bouton doit rediriger vers la page de prise de rendez-vous définie par Sïana Joaillerie.

Ne pas inventer d'URL dans l'implémentation.

L'URL sera fournie séparément.

---

# 27. UX MOBILE

Le mobile doit être considéré comme un support prioritaire.

Le quiz doit être utilisable :

- à une main ;
- sans zoom ;
- sans défilement horizontal ;
- avec des boutons suffisamment grands ;
- avec des zones de clic confortables ;
- avec une typographie lisible ;
- avec une progression visible.

Les choix doivent être facilement distinguables.

Éviter les interactions trop fines ou complexes.

---

# 28. UX DES RÉPONSES

Chaque réponse doit avoir un état visuel :

### État normal

Réponse disponible.

### État survol

Uniquement pertinent sur desktop.

### État sélectionné

La réponse sélectionnée doit être immédiatement identifiable.

### État focus

Visible pour la navigation clavier.

### État erreur

Si une réponse est requise mais absente.

Les états ne doivent pas dépendre uniquement de la couleur.

---

# 29. ACCESSIBILITÉ

Le quiz doit être utilisable avec :

- clavier ;
- lecteur d'écran ;
- navigation sans souris.

Les réponses doivent être de véritables éléments interactifs compréhensibles par les technologies d'assistance.

Ne pas utiliser uniquement des éléments visuels non sémantiques.

Les contrastes doivent être suffisants.

Les textes doivent rester lisibles.

Les images décoratives doivent pouvoir être ignorées par les lecteurs d'écran.

Les images porteuses d'information doivent disposer d'une alternative textuelle pertinente.

---

# 30. MICRO-INTERACTIONS

Les animations peuvent être utilisées pour donner une sensation premium.

Elles doivent rester :

- rapides ;
- discrètes ;
- élégantes ;
- fonctionnelles.

Exemples :

- transition entre deux questions ;
- animation légère de sélection ;
- progression ;
- apparition du résultat.

Ne jamais sacrifier la rapidité ou l'accessibilité au profit de l'animation.

Respecter également les préférences système de réduction des animations lorsque disponibles.

---

# 31. RESPONSIVE

Le quiz doit être conçu pour fonctionner correctement sur :

- smartphone ;
- tablette ;
- ordinateur portable ;
- grand écran.

Le contenu doit rester centré et lisible.

Les choix doivent être réorganisés intelligemment selon la largeur disponible.

---

# 32. PERFORMANCE UX

Le quiz doit donner une impression de fluidité.

Éviter :

- écrans de chargement inutiles ;
- animations longues ;
- changements de page perceptiblement lents ;
- images trop lourdes ;
- éléments qui se déplacent pendant le chargement.

Le résultat doit apparaître immédiatement après validation des informations.

---

# 33. SEO

Le quiz étant potentiellement une page d'acquisition, prévoir :

- un titre de page pertinent ;
- une meta description pertinente ;
- une structure de titres cohérente ;
- une URL lisible ;
- des contenus textuels indexables lorsque cela est pertinent.

Ne pas chercher à sur-optimiser les questions ou les réponses pour les moteurs de recherche.

Le contenu doit rester naturel et orienté utilisateur.

Les pages de résultat peuvent être indexables ou non selon la stratégie SEO globale du site.

Cette décision doit être explicite.

---

# 34. PARTAGE / SOCIAL

Prévoir la possibilité d'ajouter ultérieurement un partage du résultat.

Ce n'est pas obligatoire pour la première version.

Si cette fonctionnalité est implémentée, le partage doit porter sur le résultat :

> « Mon style de bijou est… »

et non sur des informations personnelles.

Ne jamais exposer :

- prénom ;
- nom ;
- adresse e-mail ;
- date de mariage ;
- données de scoring individuelles.

---

# 35. DONNÉES PERSONNELLES

Les informations collectées sont :

- prénom ;
- nom ;
- adresse e-mail ;
- date du mariage ou de l'événement ;
- réponses au quiz, si elles sont conservées.

Ne collecter aucune donnée supplémentaire sans justification fonctionnelle.

Les données doivent être traitées conformément aux exigences applicables en matière de protection des données.

La conservation des réponses individuelles doit être décidée selon les besoins de Sïana Joaillerie.

---

# 36. ANALYTICS / MESURE

Prévoir la possibilité de mesurer au minimum :

- affichage du quiz ;
- démarrage du quiz ;
- progression ;
- réponse aux questions ;
- arrivée à la question 9 ;
- affichage du formulaire ;
- formulaire commencé ;
- formulaire validé ;
- résultat Chaleureux ;
- résultat Élégant ;
- résultat Sensible ;
- résultat Instinctif ;
- clic sur « Parlons de votre projet » ;
- prise de rendez-vous, lorsque cette information peut être mesurée.

Les événements doivent être nommés de manière cohérente.

La mesure ne doit pas dégrader l'expérience utilisateur.

---

# 37. ABANDON DU QUIZ

Prévoir la possibilité d'identifier les étapes auxquelles les utilisateurs abandonnent le parcours.

Il doit être possible de savoir notamment si les abandons sont concentrés :

- au début ;
- au milieu ;
- à la question bonus ;
- sur le formulaire.

Ne pas interrompre le parcours avec des pop-ups agressifs.

---

# 38. VALIDATION DU FORMULAIRE

Le formulaire doit vérifier :

### Prénom
Obligatoire.

### Nom
Obligatoire.

### Email
Obligatoire + format valide.

### Date
Obligatoire + date valide.

Les erreurs doivent être affichées clairement à proximité du champ concerné.

Les données déjà saisies ne doivent pas être perdues lorsqu'une erreur est détectée.

---

# 39. GESTION DU RETOUR NAVIGATEUR

Le comportement du bouton « retour » du navigateur doit être testé.

Il ne doit pas provoquer :

- perte inattendue des réponses ;
- double soumission ;
- résultat incorrect ;
- réinitialisation incompréhensible du quiz.

---

# 40. PRÉVENTION DES DOUBLES SOUMISSIONS

Après validation du formulaire, empêcher une double soumission accidentelle.

Le CTA doit fournir un feedback visuel pendant le traitement.

---

# 41. CAS DE TEST FONCTIONNELS

Avant validation finale, tester au minimum :

### Test A — Chaleureux

Construire un parcours donnant clairement le Style Chaleureux.

Vérifier :

- score ;
- résultat ;
- contenu ;
- CTA.

### Test B — Élégant

Même validation.

### Test C — Sensible

Même validation.

### Test D — Instinctif

Même validation.

### Test E — Égalité

Créer volontairement une égalité entre deux styles.

Vérifier que le départage fonctionne.

### Test F — Modification d'une réponse

Répondre à plusieurs questions puis revenir en arrière et modifier une réponse.

Vérifier que le score final est correct.

### Test G — Formulaire incomplet

Tenter de continuer sans renseigner les champs obligatoires.

Le résultat ne doit pas être accessible.

### Test H — Email invalide

Vérifier le message d'erreur.

### Test I — Date invalide

Vérifier le message d'erreur.

### Test J — Mobile

Tester le parcours complet sur smartphone.

### Test K — Desktop

Tester le parcours complet sur ordinateur.

### Test L — Clavier

Tester la totalité du parcours sans souris.

---

# 42. CRITÈRES D'ACCEPTATION

Le produit est considéré comme terminé lorsque :

- les 9 questions sont présentes ;
- les textes sont exactement ceux validés ;
- les 4 styles sont correctement associés aux réponses ;
- le scoring fonctionne ;
- la question bonus fonctionne ;
- les égalités sont gérées de manière déterministe ;
- le résultat ne peut pas être affiché avant le formulaire ;
- prénom, nom, e-mail et date sont collectés ;
- les validations fonctionnent ;
- les quatre pages de résultat existent ;
- chaque résultat affiche le bon contenu ;
- chaque résultat possède le CTA de prise de rendez-vous ;
- le CTA redirige vers l'URL fournie ;
- le parcours est responsive ;
- le parcours est accessible ;
- aucune réponse n'est perdue lors d'une navigation arrière ;
- aucune double soumission ne peut provoquer un comportement incohérent ;
- les principaux événements peuvent être mesurés ;
- aucun choix technique particulier n'est imposé par ce cahier des charges.

---

# 43. IMPORTANT — CE QUI NE DOIT PAS ÊTRE FAIT

Ne pas :

- créer des catégories genrées comme « La Chaleureuse » ;
- présenter le résultat comme un diagnostic de personnalité ;
- afficher le résultat avant la collecte des coordonnées ;
- demander des informations personnelles supplémentaires ;
- inventer une URL de prise de rendez-vous ;
- imposer une technologie ou une architecture particulière ;
- imposer un CMS ou un framework ;
- supposer que le quiz doit être réalisé dans System.io ;
- dépendre de quatre tags ou d'une fonctionnalité particulière d'un outil tiers ;
- perdre les réponses lorsqu'une personne revient à une question précédente ;
- laisser une égalité produire un résultat aléatoire ;
- utiliser des animations qui ralentissent le parcours ;
- rendre les réponses dépendantes uniquement de la couleur ;
- rendre le quiz difficile à utiliser sur mobile.

---

# 44. PRIORITÉS EN CAS DE CONFLIT

Si plusieurs contraintes entrent en conflit, respecter cet ordre de priorité :

1. **Exactitude du résultat**
2. **Simplicité du parcours utilisateur**
3. **Clarté des interactions**
4. **Collecte correcte des informations**
5. **Accessibilité**
6. **Performance**
7. **Esthétique et animations**

L'expérience doit toujours privilégier la compréhension et la fiabilité plutôt que l'effet visuel.

---

# 45. LIVRABLE ATTENDU

Le résultat final doit être un quiz prêt à être intégré au site Sïana Joaillerie, avec :

- l'intégralité des questions ;
- l'intégralité des réponses ;
- le scoring ;
- la logique de résultat ;
- la gestion des égalités ;
- le formulaire ;
- les quatre résultats ;
- le CTA de prise de rendez-vous ;
- l'expérience responsive ;
- les états d'interaction ;
- les validations ;
- les critères d'accessibilité ;
- les événements de mesure nécessaires.

Aucune décision technique n'est imposée dans ce document.

Le développeur est libre de choisir la meilleure implémentation technique permettant de respecter **exactement** ce comportement fonctionnel et cette expérience utilisateur.