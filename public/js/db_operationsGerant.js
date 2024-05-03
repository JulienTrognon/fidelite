const db = require('./db'); // importation du module db
const bcrypt = require('bcrypt'); // importation du module bcrypt

module.exports =
function operationsGerant(){ // fonction asynchrone pour les opérations
    this.ajoutClient = async function (req, res) { // fonction asynchrone pour l'ajout d'un client
        const {nom, prenom, date_naissance, pseudo, mot_de_passe} = req.body; // récupération des données
        const mot_de_passe_crypte = await bcrypt.hash(mot_de_passe, 10); // cryptage du mot de passe
        try {
            await db.query('INSERT INTO client(nom, prenom, date_naissance pseudo, mot_de_passe) VALUES($1, $2, $3, $4, $5)', [nom, prenom, date_naissance, pseudo, mot_de_passe_crypte]); // requête SQL
            } catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
            }
        }
    
    this.suppressionClient = async function (req, res) { // fonction asynchrone pour la suppression d'un client
        const {id} = req.body; // récupération des données
        try {
            await db.query('DELETE FROM client WHERE id = $1', [id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.ajoutGerant = async function (req, res) { // fonction asynchrone pour l'ajout d'un gérant
        const {pseudo, mot_de_passe} = req.body; // récupération des données
        const mot_de_passe_crypte = await bcrypt.hash(mot_de_passe, 10); // cryptage du mot de passe
        try {
            await db.query('INSERT INTO gerant(pseudo, mot_de_passe) VALUES($1, $2)', [pseudo, mot_de_passe_crypte]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.suppressionGerant = async function (req, res) { // fonction asynchrone pour la suppression d'un gérant 
        const {id} = req.body; // récupération des données
        try {
            if(id != 1){ // il faut garder le gérant principal
            await db.query('DELETE FROM gerant WHERE id = $1', [id]); // requête SQL
            }
        }catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.modificationClient = async function (req, res) { // fonction asynchrone pour la modification d'un client
        const {id, nom, prenom, date_naissance, pseudo, mot_de_passe} = req.body; // récupération des données
        const mot_de_passe_crypte = await bcrypt.hash(mot_de_passe, 10); // cryptage du mot de passe
        try {
            await db.query('UPDATE client SET nom = $1, prenom = $2, date_naissance = $3, pseudo = $4, mot_de_passe = $5 WHERE id = $6', [nom, prenom, date_naissance, pseudo, mot_de_passe_crypte, id]); // requête SQL
            }
            catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
            }
        }

    this.setPointClient = async function (req, res) { // fonction asynchrone pour la modification des points d'un client
        const {nb_points,id} = req.body; // récupération des données
        try {
            await db.query('UPDATE client SET nb_points = $1 WHERE id = $2', [nb_points, id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.ajoutPointClient = async function (req, res) { // fonction asynchrone pour l'ajout de points à un client
        const {nb_points,id} = req.body; // récupération des données
        try {
            await db.query('UPDATE client SET nb_points = nb_points + $1 WHERE id = $2', [nb_points, id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.diminuePointClient = async function (req, res) { // fonction asynchrone pour la diminution des points d'un client
        const {nb_points,id} = req.body; // récupération des données
        try {
            await db.query('UPDATE client SET nb_points = nb_points - $1 WHERE id = $2', [nb_points, id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.setStockCadeau = async function (req, res) { // fonction asynchrone pour la modification du stock d'un cadeau
        const {stock,id} = req.body; // récupération des données
        try {
            await db.query('UPDATE cadeau SET stock = $1 WHERE id = $2', [stock, id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.ajoutStockCadeau = async function (req, res) { // fonction asynchrone pour l'ajout de stock à un cadeau
        const {stock,id} = req.body; // récupération des données
        try {
            await db.query('UPDATE cadeau SET stock = stock + $1 WHERE id = $2', [stock, id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.diminueStockCadeau = async function (req, res) { // fonction asynchrone pour la diminution du stock d'un cadeau
        const {stock,id} = req.body; // récupération des données
        try {
            const nb_stock = await db.query('SELECT stock FROM cadeau WHERE id = $1', [id]); // requête SQL
            if(nb_stock >= stock){
                await db.query('UPDATE cadeau SET stock = stock - $1 WHERE id = $2', [stock, id]); // requête SQL
            }else{
                await db.query('UPDATE cadeau SET stock = 0 WHERE id = $1', [id]); // requête SQL
            }
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    
    this.ajoutCadeau = async function (req, res) { // fonction asynchrone pour l'ajout d'un cadeau
        const {nom, description, prix_points,stock,special_anniv} = req.body; // récupération des données
        try {
            await db.query('INSERT INTO cadeau(nom, description, prix_points, stock, special_anniv) VALUES($1, $2, $3, $4, $5)', [nom, description, prix_points,stock,special_anniv]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

    this.suppressionCadeau = async function (req, res) { // fonction asynchrone pour la suppression d'un cadeau
        const {id} = req.body; // récupération des données
        try {
            await db.query('DELETE FROM cadeau WHERE id = $1', [id]); // requête SQL
            }
        catch (err) { // si erreur
            console.error(err); // affichage de l'erreur
        }
    }

}
