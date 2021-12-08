const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

app.get('/beers', (req, res, next) => {
  res.render('./beers/beers-page');
});

app.get('/random-beer', (req, res, next) => {
  res.render('./random/random-beer');
});

// ..

// Add the route handlers here:

app.get('/', (req, res, next) => {
  res.render('../views/index');
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));







