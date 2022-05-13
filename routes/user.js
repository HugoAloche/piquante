const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.js');

router.post('/login', userCtrl.connectProfile);
router.post('/signup', userCtrl.createProfile)

module.exports = router;