const Sauce = require('../models/Sauce');
exports.createsSauces = (req, res, next) => {
    const sauce = new Sauce({
        userId: 'test',
        name: 'ma super sauce',
        manufacturer: 'Hugo',
        description: 'la sauce de hugo',
        mainPepper: 'poivre',
        imageUrl: 'jsp',
        heat: 'pas comrpis',
        likes: 2,
        dislikes: 1,
        usersLikes: ['j', 'k'],
        usersDisliked: ['y', 'm']
    })
}