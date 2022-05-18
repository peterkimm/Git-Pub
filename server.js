const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const food = require('./models/food');
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
});


app.get('/foods', (req, res) => {
    res.render('food_index.ejs', {
        allFoods: food
    });
});


app.get('/foods/:indexOfFoodArray', (req, res) => {
    res.render('food_show.ejs', {
    food: food[req.params.indexOfFoodArray],
});
});



app.listen(port, () => {
    console.log(`Listening on port`, port)
});