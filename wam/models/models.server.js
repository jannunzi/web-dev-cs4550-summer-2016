module.exports = function() {
    var models = {};
    models.scriptModel = require('./script/script.model.server.js')();
    models.statementModel = require('./statement/statement.model.server.js')(models)
    return models;
};