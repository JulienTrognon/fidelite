INTERPRÉTATION DU SUJET
===================

Le site concerne le programme de fidélité d'une enseigne commerciale. Il regroupe des offres achetables avec des points fidélité par les clients, possiblement en nombre limité (ou pire une offre -> un client).
Le client peut voir les offres qu'il peut acheter, et acheter une offre.

Le manager peut voir les offres et les clients, et ajouter/modifier/supprimer un client ou une offre.


## ROUTES 

### Vue Client

#### Page d'accueil
- `/` — Page listant les cadeaux disponibles et le nombre de points

#### Pages Authentification
- `/sign` — Page de connexion / inscription

#### Pages Compte
- `/account` — Page du compte client. Possibilité d'edit certains trucs mais pas tous, per exemple pour edit son adresse il faut en faire une demande qu'un manager traitera.

#### Pages Cadeaux
- `/offers` — redirige vers `/`
- `/offer/:id` — Affiche le détail d'un cadeau : quel commerçant le propose, le coût en points sur la carte de CE commerçant etc.


#### Pages Panier
- `/cart` — Page de panier
- `/cart/checkout` — Page de paiement


### Vue Manager

#### Page d'accueil
- `/manager` — si connecté, page d'accueil des managers, sinon redirige vers `/sign`. Cette page contient un lien vers la liste des clients, leur nombre total, un lien vers la liste des cadeaux de son enseigne associée.
- `/manager/offers` — page listant les cadeaux de son enseigne associée, avec possibilité de Ajouter / Modifier / Supprimer un cadeau.
- `/manager/clients` — page listant les clients de son enseigne associée, avec possibilité de Ajouter / Modifier (adresse par exemple) / Supprimer un client.
