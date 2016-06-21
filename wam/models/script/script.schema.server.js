module.exports = function() {
    var mongoose = require('mongoose');
    var ScriptSchema = mongoose.Schema({
        name: String,
        description: String
    }, {collection: 'script'});
    return ScriptSchema;
}