const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const loginCtrl = require('../controllers/login.js');

//* Si je veux me connecter
router.post('/', loginCtrl)

module.exports = router;