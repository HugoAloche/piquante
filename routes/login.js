const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/Utilisateur.js');

//* Si je veux me connecter
router.post('/', (req, res, next) => {
    let user = false;
    let userId = '';
    Utilisateur.find()
        .then(utilisateurs => {
            utilisateurs.forEach(utilisateur => {
                //* Si l'email et le mot de passe concorde
                if (req.body.email === utilisateur.email) {
                    if (req.body.password === utilisateur.password) {
                        user = true;
                        userId = utilisateur._id;
                    }
                }
            })
        }).then(response => {
            //* Si l'email et le mot de passe concorde
            if (user) {
                res.status(200).json({
                    userId: userId,
                    token: jwt.sign({ userId: userId },
                        'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                    )
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: error })
        })
})

module.exports = router;