TÂCHES
====================


Découpage du projet en modules : 
1. Module d'Authentification
2. Module de Gestion des Utilisateurs
3. Module de Gestion des Points
4. Module de Catalogue de Cadeaux
5. Module de Gestion du Panier
6. Module de Base de Données
7. Module Frontend

----------------------------------

## Module de Base de Données

- **Fonctionnalités** : Centralise toutes les opérations de stockage, de récupération et de mise à jour des données. Gère les schémas de base de données et les migrations.
- **Dépendances** : Fournit des services à tous les autres modules nécessitant un accès aux données stockées.

### Sous-Module : Conception et Modélisation des Données
1. **Schéma E/R**
   - Tables concrètes, abstraites, héritage.
   - Relations entre tables (cardinalités), tables d'association si relation n-aire.
   - Contraintes d'intégrité, d'unicité, etc.

2. **Implémentation**
   - Script SQL pour la création et l'initialisation.

3. **Peuplement**
   - Peupler vite fait la bdd
   - Tester avec quelques requêtes pour mettre à l'épreuve le modèle développé.

### Sous-Module : Gestion des Données
1. **API de Manipulation des Données**
   - Requêtes prédéfinies, fonctions, et vues pour encapsuler l'accès aux données.

### Sous-Module : Optimisation
1. **Optimisation des Performances**
   - Optimiser les requêtes pour améliorer les temps de réponse, notamment par l'optimisation des index et la révision des plans de requête.
   - (facultatif) Minimiser le nombre de requêtes pour ne pas surcharger le site.
2. **Portabilité**
   - Rendre la procédure de création et peuplement de la bdd faisable sur une autre machine facilement.
   - Écrire un tuto pour expliquer comment tester le site aved bdd.



## Module d'Authentification

- **Fonctionnalités** : gère la connexion et la déconnexion des utilisateurs (clients et gérants), la gestion des sessions et la sécurité des accès.
- **Dépendances** : interagit avec la bdd pour la vérification des identifiants.

### Sous-module : Gestion de la connexion
1. **Interface de connexion**
   - Formulaires de connexion pour les clients et les gérants avec champs pour identifiant et mot de passe.
   - Validation côté client pour vérifier le format des entrées.
   - Bouton de connexion.
   - (facultatif) Formulaire de changement de mot de passe.

2. **Authentification serveur**
   - Routes pour les demandes de connexion.
   - Implémenter la logique de vérification des identifiants dans la bdd.
   - Gérer les sessions utilisateur pour maintenir l'état de connexion.
   - Message d'erreur / succès après tentative de connexion.

3. **Sécurité**
   - Hachage des mots de passe.
   - Anti force brute (limiter le nombre de tentatives de mdp).
   - Anti-injections SQL.

### Sous-module : Gestion de la session
1. **Création de Session**
   - Logique pour créer une session utilisateur à la connexion réussie.
   - Requêtes SQL pour stocker les infos de session.

2. **Maintien de la Session**
   - Coder un truc pour maintenir la session active pendant que l'utilisateur est connecté.
   - Expiration de session après une période d'inactivité.

3. **Destruction de Session**
   - Bouton de déconnexion.
   - Effacer les infos de session avant sa desctruction.
   - Destruction de session.

### Sous-Module : Gestion des Erreurs
1. **Messages d'Erreur**
   - Créer les messages d'erreur de connexion.
   - Afficher les erreurs sur l'UI.



## Module de Gestion des Utilisateurs

- **Fonctionnalités** : Permet au gérant de créer, modifier et supprimer des comptes clients. Inclut également la gestion des profils des clients.
- **Dépendances** : Utilise le module d'authentification pour sécuriser les accès et le module de bdd pour stocker les informations des utilisateurs.

### Sous-Module : Interface de Gestion des Utilisateurs
1. **Création de l'Interface Utilisateur**
   - UI de gestion des utilisateurs pour les gérants.
   - Formulaire pour ajouter des utilisateurs.
   - Formulaire pour éditer des utilisateurs.
   - Formulaire pour supprimer des utilisateurs.

2. **Validation Côté Client**
   - Validation des formulaires (validité des infos entrées).

### Sous-Module : Gestion Backend des Utilisateurs
1. **APIs de Gestion des Utilisateurs**
   - Routes CRUD (Create, Read, Update, Delete) sur les comptes utilisateurs.
   - Contrôleurs pour chacune de ces routes.

2. **Interaction avec la Base de Données**
   - Requêtes SQL nécessaires pour interagir avec la table des utilisateurs.
   - S'assurer de l'intégrité des données (via SQL ou JS ?).

3. **Permissions**
   - Gestion des permissions aux fonctionnalités (qui produit des interfaces différentes, ici client et gérant).

### Sous-Module : Gestion de l'Affichage et des Mises à Jour
1. **Feedback en Temps Réel**
   - JQuery AJAX pour update l'UI en temps réel lors d'une action sur utilisateur.
   - (facultatif) Notifications pour confirmer les actions ou signaler des erreurs.

2. **Pagination et Recherche**
   - Pagination (ou infinite scroll) pour gérer l'affichage de beaucoup d'utilisateurs.
   - Fonction de recherche d'utilisateurs qui filtre la liste visible par le gérant.



## Module de Gestion des Points

- **Fonctionnalités** : Responsable de l'attribution, de la mise à jour, et de la visualisation des points de fidélité pour chaque client.
- **Dépendances** : Interagit directement avec la bdd pour mettre à jour les soldes de points.

### Sous-Module : Ajout / Retrait des Points
1. **Interface de Gestion des Points**
   - UI Gérant pour ajouter / retirer des points aux clients.
   - Update en temps réel pour le gérant (AJAX).

2. **Backend Gestion des Points**
   - Routes pour des requêtes d'ajout et de suppression de points.
   - Contrôleurs pour chacune de ces routes.
   - Modifications en temps réel dans la bdd.

3. **Sécurité**
   - Permissons gérants.
   - Anti-injections HTML / SQL.

### Sous-Module : Visualisation des Points pour les Clients
1. **Affichage des Points sur l'Accueil Client**
   - Affichage temps réel des points client (AJAX).

2. **Historique des Transactions de Points**
   - Historique des transactions de points client (points gagnés et dépensés).

### Sous-Module : Gestion de la Cohérence des Points
1. **Synchronisation des Points**
   - Gérer le cas des modifications concurrentes (éviter le cas où ça pourrait passer en négatif).

2. **Intégrité des Données**
   - Vérifications fréquentes de la bdd pour assurer la cohérence des données.
   - Détecter et corriger les erreurs d'intégrité.



## Module de Catalogue de Cadeaux

- **Fonctionnalités** : Gère l'ajout, la suppression et la mise à jour des cadeaux disponibles. Permet aux clients de voir les cadeaux qu'ils peuvent réclamer selon leurs points.
- **Dépendances** : Dépend du module de gestion des points pour afficher les cadeaux accessibles basés sur les points disponibles des clients.

### Sous-Module : Gestion de l'Inventaire des Cadeaux
1. **UI Gestion des Cadeaux**
   - Formulaires pour entrer les détails des cadeaux, tels que le nom, la description, le coût en points, et éventuellement des options comme la taille ou la couleur.
   - UI / styles gérant pour ajouter / modifier / supprimer des cadeaux.
   - Update temps réel une fois de retour dans l'inventaire des cadeaux.

2. **Backend l'Inventaire**
   - Routes CRUD (Create, Read, Update, Delete) sur les cadeaux.
   - Contrôleurs dont la vérification des droits d'accès du gérant.

3. **Validation et Sécurité**
   - Validations pour cohérence des données des cadeaux.
   - Anti injections.

### Sous-Module : Présentation des Cadeaux aux Clients
1. **Affichage des Cadeaux**
   - UI clients pour voir les cadeaux disponibles.
   - Pagination / infinite scroll.

2. **Recherche des Cadeaux**
   - UI Barre de recherche des cadeaux.
   - Logique backend recherche cadeaux
   - (facultatif) Fonctionnalité de filtres pour la recherche des cadeaux (prix, date etc).

3. **Détails et Sélection des Cadeaux**
   - Permettre aux clients de voir des détails supplémentaires sur un cadeau en cliquant dessus.
   - Offrir une option pour ajouter des cadeaux au panier directement depuis cette vue.



## Module de Gestion du Panier

- **Fonctionnalités** : Permet aux clients de choisir des cadeaux, les ajouter à un panier, et finaliser le panier pour échanger les points contre des cadeaux.
- **Dépendances** : Relie les modules de gestion des points et de catalogue de cadeaux pour ajuster les points et mettre à jour l'état des cadeaux.

### Sous-Module : Interface du Panier
1. **UI du Panier**
   - UI de la panier actuel du client : liste des cadeaux ajoutés, leur quantité, et total de points à payer.
   - Options sur cette UI pour modifier les quantités ou supprimer des cadeaux directement depuis le panier.

2. **Temps réel**
   - Temps réel pour les modifications dans le panier (AJAX).

### Sous-Module : Logique du Panier
1. **Ajouts au Panier**
   - Logique pour ajouter des cadeaux au panier : vérification de la disponibilité des cadeaux. On peut ajouter autant qu'on veut, la vérif des points se fait si une tentative de "paiement" est effectuée.
   - Updates temps réel pour la bdd quand modifications.

### Sous-Module : Validation et Feedback
1. **Validation du Panier**
   - Bouton de validation du panier.
   - Vérification finale des quantités de cadeaux et des points disponibles.
   - Appel au module des points pour modifier les points du client.

2. **Feedback après Validation**
   - UI informant le client de comment s'est passée la transaction (succès / échec (raisons)).
   - Routes et contrôleur pour gérer et séparer les cas d'erreurs.



## Module Frontend

- **Fonctionnalités** : Développement des interfaces utilisateur pour les clients et le gérant, en utilisant des frameworks comme Bootstrap et jQuery pour un design responsive et interactif.
- **Dépendances** : Interagit avec tous les autres modules backend pour récupérer les données nécessaires à l'affichage.

### Sous-Module d'Interface Utilisateur de Connexion

- **Fonctionnalités** : Gère les formulaires de connexion et d'inscription pour les gérants, ainsi que les formulaires de connexion pour les clients. Inclut également la gestion de l'affichage des messages d'erreur et de confirmation.

### Sous-Module de Page d'accueil Client

- **Fonctionnalités** : UI pour que les clients consultent leurs points, les cadeaux disponibles, et gèrent leur panier de cadeaux.
- **Composants** :
  - Affichage des points : Vue qui montre le solde actuel des points.
  - Catalogue de cadeaux : Liste les cadeaux disponibles que le client peut ajouter à son panier.
  - Gestion du panier : Permet aux clients de voir les articles dans le panier, de les modifier ou de valider le panier.

### Sous-Module de Page d'accueil Gérant

- **Fonctionnalités** : UI pour que le gérant s'occupe des comptes des clients, d'ajouter ou de retirer des points, et de gérer l'inventaire des cadeaux.
- **Composants** :
  - Gestion des utilisateurs : Interface pour ajouter, supprimer ou modifier les comptes clients.
  - Gestion des cadeaux : Outils pour ajouter, supprimer et modifier les détails des cadeaux disponibles.
