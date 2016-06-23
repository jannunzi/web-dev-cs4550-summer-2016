module.exports = function() {
    var mongoose = require('mongoose');
    var StatementSchema = mongoose.Schema({
        type: {type: String, enum:['NUMBER', 'STRING', 'DATE', 'IF', 'DB']},
        output: String,
        input: String,
        operation: String,
        parameters: [String]
    });
    return StatementSchema;
};