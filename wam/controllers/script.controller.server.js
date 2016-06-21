module.exports = function(app, models) {

    var scriptModel = models.scriptModel;

    app.get('/wam/script/new', newScriptController);
    app.post('/wam/script', createScriptController);
    app.post('/wam/script/:scriptId', updateScriptController);
    app.get('/wam/script/:scriptId', editScriptController);
    app.get('/wam/script', scriptListController);

    function updateScriptController(req, res) {
        var scriptId = req.params.scriptId;
        var newScript = req.body;
        scriptModel
            .updateScript(scriptId, newScript)
            .then(
                function(script) {
                    res.redirect('/wam/script');
                }
            );
    }

    function createScriptController(req, res) {
        console.log(req.body);
        scriptModel
            .createScript(req.body)
            .then(
                function(script) {
                    res.redirect('/wam/script');
                }
            );
    }

    function scriptListController(req, res) {
        scriptModel
            .findAllScripts()
            .then(
                function(scripts) {
                    var data = {
                        scripts: scripts
                    };
                    res.render('wam/script/script-list.view.server.ejs', data);
                }
            );
    }

    function newScriptController(req, res) {
        res.render('wam/script/script-new.view.server.ejs');
    }

    function editScriptController(req, res) {
        var scriptId = req.params.scriptId;
        scriptModel
            .findScriptById(scriptId)
            .then(
                function(script) {
                    var scope = {
                        script: script
                    };
                    res.render('wam/script/script-edit.view.server.ejs', scope);
                }
            );
    }
};