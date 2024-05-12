const { query } = require('../db/connect');

function pas_de_session(req, res) {
  console.log("pas de session en cours, redirection vers /login");
  res.redirect('login');
}

const index_controller = {
  index_get: async (req, res, next) => {
    // test de session active stockée en local
    if (!req.cookies?.['session_id']) {
      console.log('pas de cookie')
      pas_de_session(req, res);
      return;
    }

    // vérif base de données
    const { rows } = await query(
      'SELECT * FROM session WHERE id = $1 AND fin > NOW()',
      [req.cookies['session_id']]
    );

    if (rows.length === 0) {
      console.log('pas dans la DB');
      pas_de_session(req, res);
      return;
      // session active
    }

    // récup des données de la session
    console.log("Session active :", rows[0].user_id, rows[0].user_type);
    res.render('index', { title: 'Accueil' });
  }
}

module.exports = index_controller
