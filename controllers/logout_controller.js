const { delete_session } = require('../middleware/session');

const logout_controller = {
  logout_get : (req, res) => {
    if (!req.cookies?.['session_id']) {
      console.log('Accès logout : pas de session en cours');
      res.redirect('/login');
      return;
    }

    delete_session(req, res, req.cookies['session_id']);
    res.redirect('/login');
  },
};

module.exports = logout_controller;
