const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const signupRoutes = require('./routes/signup.js');
const loginRoutes = require('./routes/login.js');
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

app.use('/api/auth/signup', signupRoutes);
app.use('/api/auth/login', loginRoutes);
app.use('/api/auth/sauces', saucesRoutes);

// app.get('/api/auth/signup:id', (req, res, next) => {
//     Utilisateur.findOne({
//             _id: req.params.id
//         })
//         .then(utilisateur => {
//             res.status(200).json(utilisateur);
//         })
//         .catch(error => {
//             res.status(400).json({ error: error })
//         })
// })

module.exports = app;