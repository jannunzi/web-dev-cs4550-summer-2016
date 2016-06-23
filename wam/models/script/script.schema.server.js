module.exports = function() {
    var mongoose = require('mongoose');
    var StatementSchema = require('../statement/statement.schema.server')();
    var ScriptSchema = mongoose.Schema({
        name: String,
        description: String,
        statements: [StatementSchema]
    }, {collection: 'script'});
    return ScriptSchema;
}