const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route pour la page d'authentification unique
router.get('/auth', authController.auth_get);
router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);

module.exports = router;
