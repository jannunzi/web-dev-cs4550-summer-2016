module.exports = function() {

    var mongoose = require('mongoose');

    var ScriptSchema = require('./script.schema.server')();
    var Script = mongoose.model('Script', ScriptSchema);

    var api = {
        createScript: createScript,
        findAllScripts: findAllScripts,
        findScriptById: findScriptById,
        updateScript: updateScript,
        deleteScript: deleteScript
    };
    return api;

    function deleteScript(scriptId) {
        return Script
            .remove({_id: scriptId});
    }

    function updateScript(scriptId, newScript) {
        return Script.update(
            {_id: scriptId},
            {$set: newScript});
    }

    function findScriptById(scriptId) {
        return Script.findById(scriptId);
    }

    function findAllScripts() {
        return Script.find();
    }

    function createScript(script) {
        return Script.create(script);
    }

}