const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.js');

//* Si je veux me connecter
router.post('/login', userCtrl.connectProfile);
router.post('/signup', userCtrl.createProfile)

module.exports = router;