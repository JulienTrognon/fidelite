SITE WEB DE PROGRAMME DE FIDÉLITÉ — Grind
===========================================


**Grind** est une plateforme de programme de fidélité en ligne générique, que n'importe quelle enseigne de vente pourrait utiliser pour déployer son propre programme.

En guise d'exemple, nous supposerons que **Grind** est utilisé par un magasin fictif qui vend *nomProduits*, *nomMagasin*.

Le modèle **Grind** permet à *nomMagasin* d'y inscrire ses clients. Les clients ont accès à une carte de fidélité virtuelle à points. Ces points sont obtenus par le client lors de ses achats en magasin.
*nomMagasin* peut alors proposer des offres sur **Grind**, achetables avec des points de fidélité. Ces offres peuvent prendre plusieurs formes : offres à quantité limitée, offre du mois, de la saison.


## FONCTIONNEMENT GÉNÉNRAL

Les gérants de *nomMagasin* peuvent sur **Grind** voir la liste des clients, leur attribuer des points, ajouter des nouveaux comptes fidélité client, les supprimer, les modifier sur leur demande, ajouter / supprimer des offres.

Les clients peuvent consulter les offres qu'ils peuvent acheter, leur nombre de points fidélité, `show` / `hide` les offres au prix supérieur à leurs points. Ils peuvent voir leur profil, contenant nom, prénom, e-mail, adresse postale et date d'anniversaire. Ils peuvent modifier leur nom, prénom, e-mail. Ils peuvent demander une modification de leur adresse postale aux gérants du magasin. Ils ne peuvent pas modifier leur date d'anniversaire.
Lorsqu'ils veulent acheter des offres, ils les ajoutent au panier, avant de pouvoir confirmer leur commande.

Le jour d'anniversaire d'un client lui donne des réductions sur des offres.


## TESTER LE SITE WEB

Tester le site web en local requiert les outils suivants :
- navigateur web
- Node.js

Placez vous dans le dossier racine du site (celui qui contient README.md).

Sur un terminal, avec Node.js installé, taper la commande suivante :

```sh
npm install cookie-parser debug ejs express http-errors mocha morgan pg supertest
```

Ensuite, pour lancer le serveur local :

```sh
npm start
```

Enfin sur votre navigateur web, taper l'URL suivante :

[http://localhost:3000](http://localhost:3000)

Vous pouvez désormais interagir avec le site !
