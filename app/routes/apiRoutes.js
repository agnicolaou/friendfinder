// Loading of data. Linking routes to series of data sources which hold arrays of info from survey.

var friendsArray = require('../data/friends.js');

//Routing start

module.exports = function (app) {
    // API get request showing data posted as JSON form
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    });

   