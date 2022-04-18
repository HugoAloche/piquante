const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin_ha:jNZTuv93hUs8KhEsvbbq@cluster0.i6th9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use('/api/auth/login', (req, res, next) => {
    res.header()
    res.status(200).json(message = 'Salut');
    next();
})

module.exports = app;