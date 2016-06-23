
var deepcopy = require("deepcopy");

module.exports = function(models) {
    var scriptModel = models.scriptModel;

    var api = {
        createStatement: createStatement,
        findStatementsForScript: findStatementsForScript,
        findStatement: findStatement,
        updateStatement: updateStatement,
        deleteStatement: deleteStatement,
        reorder: reorder
    };
    return api;

    function reorder(scriptId, start, end) {
        return scriptModel
            .findScriptById(scriptId)
            .then(
                function(script) {
                    script.statements.splice(end, 0, script.statements.splice(start, 1)[0]);
                    return script.save();
                }
            );
    }

    function deleteStatement(scriptId, statementId) {
        return scriptModel
            .findScriptById(scriptId)
            .then(
                function(script) {
                    script.statements.id(statementId).remove();
                    return script.save();
                }
            );
    }

    function updateStatement(scriptId, statementId, newStatement) {
        return scriptModel
            .findScriptById(scriptId)
            .then(
                function(script) {
                    var statement = script.statements.id(statementId);

                    statement.type = newStatement.type;
                    statement.output = newStatement.output;
                    statement.input = newStatement.input;
                    statement.parameters = newStatement.parameters;

                    return script.save();
                }
            )
    }

    function findStatement(scriptId, statementId) {
        return scriptModel
            .findScriptById(scriptId)
            .then(
                function(script) {
                    return script.statements.id(statementId);
                },
                function(error) {
                    console.log(error);
                }
            );
    }

    function findStatementsForScript(scriptId) {
        return scriptModel
            .findScriptById(scriptId);
    }

    function createStatement(scriptId, statement) {
        return scriptModel
            .findScriptById(scriptId)
            .then(
                function(script) {
                    script.statements.push(statement);
                    return script.save();
                }
            );
    }
};