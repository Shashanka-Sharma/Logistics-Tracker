
// initializing express
const express = require('express');
const app = express();
const path = require('path');

// constants
const PUBLIC_DIR = path.join(__dirname, `../build/static`);
const BUILD_DIR = path.join(__dirname, `../build`);
const router = require('./routes/router');

// middleware for requests
const axios = require('axios');
const morgan = require('morgan');

// enables CORS
const cors = require('cors');


// database
const mongoose = require('mongoose');
mongoDB_password = 'apPYSmCgu5m8O6u6'

// connect to database
mongoose.connect(`mongodb+srv://shankSauce2023:${mongoDB_password}@cluster0.sqeyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then( () => {
        console.log('Connected to database ');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

app.use(morgan('dev'))

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/static', express.static(PUBLIC_DIR)); // Serves static files
app.use('/client', express.static(BUILD_DIR)); // Serves static files

app.use(cors()); // Enables CORS
app.use('/', router);

app.get('*', (req, res) => { // sets CORS to wildcare allowing any website to visit
  res.sendFile(path.resolve(BUILD_DIR, 'index.html'));
});




module.exports = app;