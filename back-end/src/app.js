
// initializing express
const express = require('express');
const app = express();
const path = require('path');

// middleware for requests
const axios = require('axios');
const morgan = require('morgan');

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

app.use(express.json())
app.use(express.urlencoded({ extended: true}))




module.exports = app;