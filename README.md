# parking

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

PATRICK PIERRE HABONIMANA,
PARNIAN AHMADZADEH,
MAXIME JUNG

# Projet de Gestion de Parkings

L'objectif technique du projet consiste à implémenter le principe d'architecture MVC
avec le micro-framework Hono et TypeScript, via l'environnement d'exécution Bun.

## Structure du projet

Le projet suit l'architecture MVC, avec les dossiers principaux suivants :
- `controllers/` : contient la logique de traitement des données.
- `models/` : contient les modèles de données définis avec Prisma.
- `routes/` : contient les définitions des routes pour les fonctionnalités de l'application.
- `static/` : contient les fichiers statiques (ex. images).
- `tests/` : contient les fichiers de test pour vérifier les fonctionnalités de Prisma.

## Étapes de développement

### Partie 1 : Mise en place de la structure et du serveur
1. Initialisez un projet TypeScript et installez les dépendances.
2. Configurez l'architecture MVC.
3. Configurez un serveur statique pour les fichiers d'images.

### Partie 2 : Intégration de SQLite et Prisma
1. Créez une base de données SQLite (`parking.sqlite`) avec des tables pour les villes et les parkings.
2. Configurez Prisma pour interagir avec SQLite.
3. Mettre à jour les contrôleurs pour utiliser Prisma dans la gestion des données.

### Partie 3 : Ajout de fonctionnalités avancées et tests
1. Ajoutez de nouvelles routes et contrôleurs pour récupérer les données de villes et de parkings.
2. Implémentez la gestion des erreurs et des URL avec ou sans slash.
3. Testez la connexion Prisma avec un fichier de test (`prismaTest.ts`).



## Les problèmes rencontrés

Quelques erreurs qui ont été difficile à corriger, et la génération du client par Prisma n'a pas marché. 

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
