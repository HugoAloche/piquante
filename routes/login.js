const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login.js');

//* Si je veux me connecter
router.post('/', loginCtrl.connectProfile)

module.exports = router;