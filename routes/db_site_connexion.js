// Description: Fichier contenant les fonctions de connexion à la base de données


const pg = require('pg'); // importation du module pg

const pool = new pg.Pool({ // création d'un pool de connexion
user: 'admin',
host: 'localhost',
database: 'fidelite',
password: null,
port: 5432
});

pool.on('error', (err, client) => { // gestion des erreurs
console.error('Erreur inattendue sur le pool', err);
process.exit(-1);
});

pool.on('connect', client => { // connexion
client.query('SET search_path TO fidelite');
console.log('Connecté à la base de données');
});

module.exports = { // exportation du module
    query: (text, params) => { // fonction query
        return pool.query(text, params);
    }
};
