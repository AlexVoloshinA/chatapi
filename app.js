const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const routes = require('./routes/index');

// Create our express app
const app = express();


// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);



// Handle our own routes
app.use('/api/messages', routes);

// Export app so we can start the site in start.js
module.exports = app;