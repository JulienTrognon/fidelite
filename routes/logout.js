const express = require('express');
const router = express.Router();
const logout_controller = require('../controllers/logout_controller');

router.get('/logout', logout_controller.logout_get);

module.exports = router;
