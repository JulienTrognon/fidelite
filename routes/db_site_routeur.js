// Description: Router pour les requêtes de la base de données.

const express = require('express'); // importation du module express
const router = express.Router(); // création d'un router
const db = require('./db_site_connexion'); // importation du module database_site
const bcrypt = require('bcrypt'); // importation du module bcrypt

module.exports = router; // exportation du router


routeur.get('/connexion', (req, res) => { // route pour la connexion
  res.render('connexion', { title: 'Connexion' }); // c
});


async function verifieUtilisateur(table, pseudo, mot_de_passe) { // fonction asynchrone pour vérifier l'utilisateur
  try {
    let mdp_hash = await bcrypt.hash(mot_de_passe, 10); // cryptage du mot de passe
    const result = await db.query('SELECT * FROM $1 WHERE pseudo = $2 AND mot_de_passe = $3',[table,pseudo, mdp_hash]); // requête SQL
    return result.rows.length > 0; // si l'utilisateur existe, on retourne true, sinon false
  }
  catch (err) { // si erreur
    console.error(err); // affichage de l'erreur
    return false; // retourne false
  }
}

async function connexionClient(pseudo, mot_de_passe) { // fonction asynchrone pour la connexion de l'utilisateur
  const {pseudo, mot_de_passe} = req.body; // récupération des données
  const utilisateurExiste = await verifieUtilisateur('client', pseudo, mot_de_passe); // vérification de l'utilisateur
  if (utilisateurExiste) { // si l'utilisateur existe
    res.redirect('/profil'); // redirection vers le profil
  } else { // si l'utilisateur n'existe pas
    res.redirect('/connexion'); // redirection vers la page de connexion
  }
}

async function connexionGerant(pseudo, mot_de_passe) { // fonction asynchrone pour la connexion de l'utilisateur
  const {pseudo, mot_de_passe} = req.body; // récupération des données
  const utilisateurExiste = await verifieUtilisateur('gerant', pseudo, mot_de_passe); // vérification de l'utilisateur
  if (utilisateurExiste) { // si l'utilisateur existe
    res.redirect('/profilGerant'); // redirection vers le profil
    
  } else { // si l'utilisateur n'existe pas
    res.redirect('/connexion'); // redirection vers la page de connexion
  }
}

routeur.post('/connexion', (req, res) => { // route pour la connexion
  const {type_utilisateur} = req.body; // récupération des données
  if (type_utilisateur === 'client') { // si l'utilisateur est un client
    connexionClient(); // appel de la fonction pour la connexion du client
  } else if (type_utilisateur === 'gerant') { // si l'utilisateur est un gérant
    connexionGerant(); // appel de la fonction pour la connexion du gérant
  }else{
    res.redirect('/connexion'); // redirection vers la page de connexion
  }
});
