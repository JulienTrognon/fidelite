const db = require('./db'); // importation du module db
const bcrypt = require('bcrypt'); // importation du module bcrypt

module.exports =
function operationsClient() { // fonction asynchrone pour les opérations
    
    this.ajoutPanier = async function (req, res) { // fonction asynchrone pour l'ajout d'un panier
        const {id_client, id_produit, quantite} = req.body; // récupération des données
        try {
            if(quantite > 0){
            await db.query('INSERT INTO panier(id_client, id_produit, quantite) VALUES($1, $2, $3)', [id_client, id_produit, quantite]); // requête SQL
            }
        } catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.suppressionPanier = async function (req, res) { // fonction asynchrone pour la suppression d'un panier
        const {id} = req.body; // récupération des données
        try {
            await db.query('DELETE FROM panier WHERE id_panier = $1', [id]); // requête SQL
        }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.achatPanier = async function (req, res) { // fonction asynchrone pour l'achat d'un panier
        const {id_client} = req.body; // récupération des données
        try {
            // requête SQL pour la somme des prix des produits du panier
            const cout_total = await db.query('SELECT SUM(c.prix_points * pa.quantite) FROM cadeau AS c NATURAL JOIN panier AS pa WHERE pa.id_client = $1', [id_client]); 
            const points = await db.query('SELECT nb_points FROM client WHERE id_client = $1', [id_client]); // requête SQL pour les points du client
         
            // si le nombre de points du client est supérieur ou égal à la somme des prix des produits du panier
            if(points.rows[0].nb_points >= cout_total.rows[0].sum){
            //  requête SQL pour la mise à jour des points du client
            await db.query('UPDATE client SET nb_points = nb_points - $1 WHERE id_client = $2', [cout_total.rows[0].sum, id_client]); 

            // requête SQL pour l'ajout des produits du panier dans la table possession_cadeau
            await db.query('INSERT INTO possesion_cadeau(id_client, id_produit, quantite) SELECT id_client, id_produit, quantite FROM panier WHERE id_client = $1', [id_client]); 

            // requête SQL pour la mise à jour du stock du nombre de cadeaux
            await db.query('UPDATE cadeau SET stock = stock - (SELECT quantite FROM panier WHERE id_client = $1)', [id_client]); 

            // requête SQL pour la suppression des produits du panier
            await db.query('DELETE FROM panier WHERE id_client = $1 ', [id_client]);
            }

        } catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.voirCadeaux = async function (req, res) { // fonction asynchrone pour voir les cadeaux
        const {id_client} = req.body; // récupération des données
        try {
            // requête SQL pour voir les cadeaux
            const cadeaux = await db.query('SELECT nom_cadeau, cadeau_description, prix_points, quantite, date_achat, speical_anniv FROM cadeau NATURAL JOIN possesion_cadeau WHERE id_client = $1', [id_client]);
            res.send(cadeaux.rows); // envoi des données
        }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.voirPanier = async function (req, res) { // fonction asynchrone pour voir le panier
        const {id_client} = req.body; // récupération des données
        try {
            // requête SQL pour voir le panier
            const panier = await db.query('SELECT nom_cadeau, prix_points, quantite FROM cadeau NATURAL JOIN panier WHERE id_client = $1', [id_client]);
            res.send(panier.rows); // envoi des données
        }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

}