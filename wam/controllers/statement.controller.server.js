
module.exports = function(app, models) {

    var statementModel = models.statementModel;

    app.put ('/wam/script/:scriptId/statement/order', statementOrderController);
    app.get ('/wam/script/:scriptId/statement', statementListController);
    app.get ('/wam/script/:scriptId/statement/new', newStatementController);
    app.get ('/wam/script/:scriptId/statement/:statementId', editStatementController);
    app.get ('/wam/script/:scriptId/statement/:statementId/delete', deleteStatementController);
    app.post('/wam/script/:scriptId/statement', createStatementController);
    app.post('/wam/script/:scriptId/statement/:statementId', updateStatementController);

    function statementOrderController(req, res) {
        statementModel
            .reorder(req.params.scriptId, req.query.start, req.query.end)
            .then(
                function() {
                    res.send(200);
                }
            );
    }
    
    function deleteStatementController(req, res) {
        statementModel
            .deleteStatement(req.params.scriptId, req.params.statementId)
            .then(
                function() {
                    statementListController(req, res);
                }
            );
    }

    function updateStatementController(req, res) {
        statementModel
            .updateStatement(req.params.scriptId, req.params.statementId, req.body)
            .then(
                function() {
                    statementListController(req, res);
                }
            );
    }

    function editStatementController(req, res) {
        statementModel
            .findStatement(req.params.scriptId, req.params.statementId)
            .then(
                function(statement){
                    var scope = {
                        scriptId: req.params.scriptId,
                        statementId: req.params.statementId,
                        statement: statement
                    };
                    res.render('wam/statement/statement-edit.view.server.ejs', scope);
                },
                function(error) {
                    console.log(error);
                }
            );
    }

    function createStatementController(req, res) {
        console.log(req.body);
        var scriptId = req.params.scriptId;
        statementModel
            .createStatement(scriptId, req.body)
            .then(
                function() {
                    res.redirect("/wam/script/"+scriptId+"/statement");
                }
            );
    }
    function newStatementController(req, res) {
        var scriptId = req.params.scriptId;
        var scope = {
            scriptId: scriptId
        };
        res.render('wam/statement/statement-new.view.server.ejs', scope);
    }

    function statementListController(req, res) {
        var scriptId = req.params.scriptId;
        statementModel
            .findStatementsForScript(scriptId)
            .then(
                function(script) {
                    var scope = {
                        scriptId: scriptId,
                        statements: script.statements
                    };
                    res.render('wam/statement/statement-list.view.server.ejs', scope);
                }
            );
    }
};