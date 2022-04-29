const express = require('express');
const multer = require('../images/multer-config.js');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces.js');
const auth = require('../middleware/auth.js');

router.get('/', auth, saucesCtrl.getSauces)
router.get('/:id', auth, saucesCtrl.getOneSauce)
router.post('/', auth, multer, saucesCtrl.createsSauces)
router.put('/:id', auth, multer, saucesCtrl.updateSauce)
router.delete('/:id', auth, multer, saucesCtrl.deleteSauce)

module.exports = router;