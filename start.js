const mongoose = require('mongoose');


// Import environmental variables from our variables.env file
require('dotenv').config({path: 'variables.env'});

// Connect to our DB and handle bad connections
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
// Tell mongoose to use ES6 promises
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log(`Error has occured ${err.message}`);
}); 

// Import our models


// Start our app
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running on the PORT ${server.address().port}`);
});