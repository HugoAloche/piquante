const express = require('express');
const router = express.Router();
const signupCtrl = require('../controllers/signup');

//* Qaund je veux m'inscrire 
router.post('/', signupCtrl.createProfile)

module.exports = router;