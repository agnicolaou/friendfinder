// Require express package
var express = require('express');

// Create express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Require routes from the app/routes directory
require('./app/routes/htmlRoutes.js')(app);
require('./app/routes/apiRoutes.js')(app);

// server listening
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
});