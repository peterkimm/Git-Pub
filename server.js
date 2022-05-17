const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const port = 3000;



app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!");
});





app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    });
});




app.listen(port, () => {
    console.log(`Listening on port`, port)
});