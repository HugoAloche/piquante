const Utilisateur = require('../models/Utilisateur');

exports.createProfile = (req, res, next) => {
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
        })
}