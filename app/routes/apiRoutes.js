// Loading of data. Linking routes to series of data sources which hold arrays of info from survey.

var matchArray = require('../data/friends.js');

//Routing start

module.exports = function (app) {
    // API get request showing data posted as JSON form
    app.get('/api/friends', function (req, res) {
        res.json(matchArray);
    });

    // API post requests when user submits form and input data to the server then pushes and saves it to the userData array
    app.post('/api/friends', function (req, res) {

        // Variable to store user score
        var user = req.body;

        // Loop through scores
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // Match to index 0 of matchArray

        var friendIndex = 0;

        // Variable represents minimum difference between user and profile in matchArray
        var minDiff = 30;

        // Loop comparing scores of user and scores of profiles existing in matchArray then calculates differences
        for (var i = 0; i < matchArray.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < matchArray[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - parseInt(matchArray[i].scores[j]));
                totalDifference += difference;
            }

            // Changes best match index then sets the new minDiff for next comparisons if there is new minimum 
            if (totalDifference < minDiff) {
                friendIndex = i;
                minDiff = totalDifference;
            }
        }

        matchArray.push(req.body);
        res.json(matchArray[friendIndex]);
    });
};