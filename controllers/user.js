const Utilisateur = require('../models/Utilisateur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createProfile = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const utilisateur = new Utilisateur({
                email: req.body.email,
                password: hash
            });
            utilisateur.save()
                .then(response => {
                    res.status(201).json({ message: 'Profil crée!' })
                })
                .catch(error => {
                    res.status(400).json({ error: error });
                })
        })
        .catch(error => { res.status(500).json({ error: error }) })
}

exports.connectProfile = (req, res, next) => {
    Utilisateur.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvée' })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id },
                            'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => {
                    res.status(500).json({ error: error })
                })
        })
        .catch(error => {
            res.status(500).json({ error: error })
        })
}