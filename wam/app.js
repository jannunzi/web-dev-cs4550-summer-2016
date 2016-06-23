module.exports = function(app) {
    
    var models = require('./models/models.server')();

    require('./controllers/script.controller.server')(app, models);
    require('./controllers/statement.controller.server')(app, models);
};