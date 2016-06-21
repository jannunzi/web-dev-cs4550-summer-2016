module.exports = function() {
    var models = {
        scriptModel: require('./script/script.model.server.js')()
    };
    return models;
};