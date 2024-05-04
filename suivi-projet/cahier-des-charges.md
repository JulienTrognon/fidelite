CAHIER DES CHARGES
===============================


## 1. Objectif du Projet
Développer un site web qui offre une gestion de carte de fidélité virtuelle. Les utilisateurs peuvent accumuler des points via leurs achats dans divers magasins et les utiliser pour obtenir des cadeaux. Les gérants peuvent ajouter / modifier / supprimer des clients, des cadeaux et attribuer des points.



## 2. Utilisateurs du Système
- Client : peut voir et échanger ses points contre des cadeaux.
- Gérant : peut ajouter / enlever des clients, des cadeaux et attribuer des points.



## 3. Fonctionnalités Principales

### Pour le Client

- Connexion : peuvent se connecter avec leurs identifiants (initialement donnés par le gérant), et les modifier.
- Consultation des points et des cadeaux : affichage des cadeaux disponibles selon les points accumulés.
- Gestion du panier : ajout de cadeaux au panier et visualisation du total des points. Validation du panier pour échanger les points.


### Pour le Gérant

- Gestion des comptes clients : création / modification / suppresion des comptes clients.
- Ajout / suppression de cadeaux : gestion de l'inventaire des cadeaux disponibles.
- Attribution de points : ajout de points sur les comptes des clients.



## 4. Contraintes Techniques

- Technologies à utiliser : Node.js, Express.js, EJS pour le templating, PostgreSQL pour la base de données, jQuery et Bootstrap pour le frontend.
- Responsive design : L'UI du site doit s'adapter pour être utilisable sur mobile, tablette et PC.
- Mobile First : Développer le site pour format vetical (mobile) d'abord, puis adapter au format horizontal (desktop).



## 5. Sécurité

- Authentification sécurisée pour les deux types d'utilisateurs.
- Gestion des sessions pour maintenir l'état de connexion de l'utilisateur.
- Persistence des données : stocker les données telles que les mises au panier dans les cookies.



## 6. Base de Données

- Schéma E/R pour définir la structure de la bdd.
- Implémentation des tables et contraintes.
- Initialisation : Script SQL pour la création et l'initialisation de la base de données.
