var user = require('./user');

module.exports = {
    configure: function(app) {
        app.get('/all', function (req, res) {
            user.get(log, res);
        });
    }
};

