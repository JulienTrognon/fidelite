ROUTES DU SITE
===================

## Vue Client

Le client peut avoir plusieurs cartes de fidélité, une par enseigne, chacune avec son propre nombre de points.
Il a accès aux cadeaux qu'il peut acheter avec ses points actuels sachant que chaque cadeau est associé à une enseigne, donc à une carte du client.
Par exemple si le client a 48 points sur sa carte IKEA, il peut acheter un mug IKEA qui en coûte 20, mais pas une desserte à 60 points ni une poêle Carrefour à 40 points (qui requiert la carte Carrefour et 40 points dessus).

#### Page d'accueil
- `/` — Page listant les cadeaux disponibles, ainsi qu'une petite zone où sont affichées les cartes possédées (menu déroulant ?)

#### Pages Authentification
- `/sign` — Page de connexion / inscription

#### Pages Compte
- `/account` — Page du compte client. Possibilité d'edit certains trucs mais pas tous, per exemple pour edit son adresse il faut en faire une demande qu'un manager traitera.

#### Pages Cadeaux
- `/offers` — redirige vers `/`
- `/offer/:id` — Affiche le détail d'un cadeau : quel commerçant le propose, le coût en points sur la carte de CE commerçant etc.

#### Pages Cartes
- `/cards` — Page des cartes possédées
- `/card/:id` — Page d'une carte spécifique


#### Pages Panier
- `/cart` — Page de panier
- `/cart/checkout` — Page de paiement


## Vue Manager

Chaque manager travaille sur une seule enseigne (expl Carrefour, IKEA, Amazon...), et chaque enseigne poste ses propres cadeaux.

#### Page d'accueil
- `/manager` — si connecté, page d'accueil des managers, sinon redirige vers `/sign`. Cette page contient un lien vers la liste des clients, leur nombre total, un lien vers la liste des cadeaux de son enseigne associée.
- `/manager/offers` — page listant les cadeaux de son enseigne associée, avec possibilité de Ajouter / Modifier / Supprimer un cadeau.
- `/manager/clients` — page listant les clients de son enseigne associée, avec possibilité de Ajouter / Modifier (adresse par exemple) / Supprimer un client.
