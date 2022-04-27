const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces.js');
const auth = require('../middleware/auth.js');

router.get('/', auth, saucesCtrl.createsSauces)

module.exports = router;