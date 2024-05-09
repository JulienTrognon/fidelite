// Description: Fichier contenant les fonctions de connexion à la base de données

const pg = require('pg'); // importation du module pg

const pool = new pg.Pool({ // création d'un pool de connexion
  user: process.env.DB_USER || 'default_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'fidelite',
  password: process.env.DB_PASSWORD || 'default_password',
  port: process.env.DB_PORT || 5432
});

pool.on('error', (err, client) => { // gestion des erreurs
  console.error('Erreur inattendue sur le pool', err);
  process.exit(-1);
});

pool.on('connect', client => { // connexion
  console.log('Connecté à la base de données');
});

module.exports = { // exportation du module
  query: (text, params) => { // fonction query
    return pool.query(text, params);
  }
};
