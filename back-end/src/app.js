
// initializing express
const express = require('express');
const app = express();
const path = require('path');

// middleware for requests
const axios = require('axios');
const morgan = require('morgan');

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))



module.exports = app;