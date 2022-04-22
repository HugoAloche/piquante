const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/Utilisateur');

//* Qaund je veux m'inscrire
router.post('/', (req, res, next) => {
    const utilisateur = new Utilisateur({
        email: req.body.email,
        password: req.body.password
    });
    utilisateur.save()
        .then(response => {
            res.status(201).json({ message: 'Profil crée!' })
        })
        .catch(error => {
            res.status(400).json({ error: error });
        });
})

module.exports = router;