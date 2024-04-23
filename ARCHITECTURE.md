ARCHITECTURE
============

## MODULES
Encapsulent une fonctionnalité du site et permettent les interactions avec les autres modules via des inrerfaces définies.

- **Authentification** : gère la connexion et l'authentification des utilisateurs (client / manager). Sous-modules eventuels pour gérer les sessions, la vérification des identifiants.
- **Panier** : gère le panier des clients (ajout / suppression d'articles, validation).
- **Cadeaux** : gère les offres d'achats des clients
- **Base de données** : gère la base de données des clients
- **Gestionnaire de clients** : accessible par les managers
- **Compte client** : modifiable par les clients


## COMPOSANTS
Éléments d'interface réutilisables et indépendants, pour augmenter la modularité du site.

- **Card de cadeau** : composant HTML qui représente une offre, son titre (lien), son prix en points, un bouton d'ajout au panier.

## ARBORESCENCE

```
/
├── bin/                        # Fichiers executable
│   └── www                     # Mise en place du serveur Node.js
│
├── controllers/                # Contrôleurs
│   └── authController.js       # Contrôleur pour l'authentification
│
├── models/                     # Modèles
│
├── public/                     # Fichiers statiques
│   ├── css/                    # CSS
│   │   └── style.css           # Fichier CSS principal
│   ├── img/                    # Images
│   └── js/                     # Javascript
│       └── main.js             # Fichier Javascript principal
│
├── routes/                     # Gestion des routes
│   ├── auth.js                 # Routes pour l'authentification
│   ├── index.js                # Routes principales
│   └── users.js                # Routes pour les utilisateurs
│
├── test/                       # Tests unitaires
│   └── test.js                 # Fichier de test par défaut
│
├── views/                      # Fichiers EJS pour l'interface utilisateur
│   ├── components/             # Vues pour les composants
│   │   ├── card.ejs            # Composant card
│   │   ├── offer.ejs           # Composant offre
│   │   └── offersList.ejs      # Composant liste des offres
│   ├── layouts/                # Layouts communs (header, footer, etc.)
│   │   ├── header.ejs          # Vue pour le header
│   │   └── footer.ejs          # Vue pour le footer
│   ├── users/                  # Vues pour les utilisateurs
│   │   └── profile.ejs         # Vue pour le profil
│   ├── auth.ejs                # Vue pour l'authentification
│   ├── errors.ejs              # Page d'erreurs
│   └── index.ejs               # Page d'accueil
│
├── app.js                      # Fichier principal
└── package.json                # Configuration du projet
```
