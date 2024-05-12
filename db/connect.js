const pg = require('pg');

const pool = new pg.Pool({
  user: process.env.DB_USER || 'default_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'fidelite',
  password: process.env.DB_PASSWORD || 'default_password',
  port: process.env.DB_PORT || 5432
});

pool.on('error', (err, client) => {
  console.error('Erreur inattendue sur le pool', err);
  process.exit(-1);
});

pool.on('connect', client => {
  console.log('Connecté à la base de données');
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  }
};
