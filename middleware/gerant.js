require('express');
const { query } = require('../db/connect');

const gerant = {
  async get_liste_clients(req, res) {
    const { rows } = await query(
      'SELECT nom, prenom, pseudo, email FROM client ORDER BY nom',
    );
    return rows;
  },

  async ajouter_client(req, res) {
    
  }
}

module.exports = gerant;