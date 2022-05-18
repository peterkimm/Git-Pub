const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const port = 3000;
const textTransform = require('text-transform');





app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!");
});





app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    });
});


// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id)
// });

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {
    drink: drinks[req.params.indexOfDrinksArray],
});
})



app.listen(port, () => {
    console.log(`Listening on port`, port)
});