const { query } = require('../db/connect');
const bcrypt = require('bcrypt');

const login_controller = {
  login_get : (req, res) => {
    res.render('login', { title: 'Connexion' });
  },

  login_post: async (req, res) => {
    console.log("login_post");
    const { email, mdp } = req.body;

    let errmessage = "";
    
    let response = await query('SELECT mdp FROM client WHERE email = $1', [email]);

    try {
      if (response.rows.length === 0) {
        // aucun client ? alors on recherche le gerant
        response = await query('SELECT mdp FROM gerant WHERE email = $1', [email]);
    
        // pas de gerant ? message d'erreur
        if (response.rows.length === 0) {
          errmessage = "Aucun compte n'existe pour cet email.";
          console.log(errmessage);
          res.render("login", { title: 'Connexion', errmessage });
          return;
        }
      }
    
      // check si on trouve plusieurs lignes (on ne doit pas)
      if (response.rows.length > 1) {
        console.log("Warning: More than one user found with the same email, should not happen, fix DB");
      }
    
      const user = response.rows[0];

      // client ou gerant peu importe, on compare le mot de passe à celui de la db
      const match = await bcrypt.compare(mdp, user.mdp);

      if (match) {
        console.log("Utilisateur : Connexion reussie");
        res.redirect('/');
        return;
      } else {
        errmessage = "Email ou mot de passe incorrect.";
        console.log(errmessage);
        res.render("login", { title: 'Connexion', errmessage });
        return;
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur du serveur");
    }
  }
};

module.exports = login_controller;
