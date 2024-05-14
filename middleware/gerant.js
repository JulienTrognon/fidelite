require('express');
const { query } = require('../db/connect');

const gerant = {
  async get_liste_clients(req, res) {
    const { rows } = await query(
      'SELECT id, nom, prenom, pseudo, email FROM client ORDER BY nom',
    );
    return rows;
  },

  async ajouter_client(req, res) {
    
  },

  async supprimer_client(req, res) {
    const { id } = req.body; // récupération des données
    try {
      await db.query('DELETE FROM client WHERE id = $1', [id]); // requête SQL
      }
    catch (err) { // si erreur
      console.error(err); // affichage de l'erreur
    }
  },
}

module.exports = gerant;