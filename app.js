const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const userRoutes = require('./routes/user.js');
const saucesRoutes = require('./routes/sauces.js');

mongoose.connect('mongodb+srv://admin_ha:jNZTuv93hUs8KhEsvbbq@cluster0.i6th9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;