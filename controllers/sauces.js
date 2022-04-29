const fs = require('fs');
const Sauce = require('../models/Sauce');
exports.createsSauces = (req, res, next) => {
    const thing = JSON.parse(req.body.sauce);
    const url = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const sauce = new Sauce({
        userId: thing.userId,
        name: thing.name,
        manufacturer: thing.manufacturer,
        description: thing.description,
        mainPepper: thing.mainPepper,
        imageUrl: url,
        heat: thing.heat,
        likes: 0,
        dislikes: 0,
        usersLikes: [],
        usersDisliked: []
    })
    sauce.save()
        .then(response => {
            res.status(201).json({ message: 'Sauce crée!' })
        })
        .catch(error => {
            res.status(400).json({ error: error });
        })
}

exports.getSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error: error }))
}

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            if (!sauce) {
                return res.status(401).json({ error: 'Sauce introuvable' })
            }
            res.status(200).json(sauce);
        })
        .catch(error => { res.status(500).json({ error: error }) })
}

exports.updateSauce = (req, res, next) => {
    let sauceObject = {}
    if (req.file) {
        const thing = JSON.parse(req.body.sauce);
        const url = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        sauceObject = {
            name: thing.name,
            manufacturer: thing.manufacturer,
            description: thing.description,
            imageUrl: url,
            mainPepper: thing.mainPepper,
            heat: thing.heat
        }
    } else {
        sauceObject = {
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            description: req.body.description,
            mainPepper: req.body.mainPepper,
            heat: req.body.heat
        }
    }
    Sauce.updateOne({ _id: req.params.id }, {...sauceObject, _id: req.params.id })
        .then(res => { res.status(200).json({ message: 'Sauce modifié :' }) })
        .catch(error => res.status(400).json({ error: error }))
}

exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(res => { res.status(200).json({ message: 'Sauce supprimée !' }) })
        .catch(error => { res.status(400).json({ error: error }) })
}