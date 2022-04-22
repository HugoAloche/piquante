const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces.js');

router.get('/', saucesCtrl.createsSauces)

module.exports = router;