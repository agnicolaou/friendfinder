// Path npm package require

const path = require('path');

// Routes

module.exports = function (app) {

    // Routing to home page
    app.get('/', (req, res) => {
        console.log('Root');
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Routing to survey page
    app.get('/survey', (req, res) => {
        console.log('Survey');
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};