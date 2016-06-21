module.exports = function(app) {
    
    var models = require('./models/models.server')();
    
    var controllers = require('./controllers/script.controller.server')(app, models);
};