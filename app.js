const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');


const app = express();

// Handle our own routes
app.use('/api', routes);

// Export app so we can start the site in start.js
module.exports = app;