const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("reçu");
    next();
})

app.use((req, res, next) => {
    res.json({ message: 'Votre requête à bien été reçu!' })
})

module.exports = app;