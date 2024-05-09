const express = require('express');
const router = express.Router();
const login_controller = require('../controllers/login_controller');

// Route pour la page d'authentification unique
router.get('/login', login_controller.login_get);
router.post('/login', login_controller.login_post);

module.exports = router;
