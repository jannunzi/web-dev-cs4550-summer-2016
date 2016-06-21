module.exports = function(app) {

    app.get('/svg', svgHandler);
    app.get('/hello', helloHandler);
    app.get('/hello/:name', helloNameHandler);
    app.get('/colorTable', colorTableHandler);
    app.get('/experiments/scripts/script', scriptHandler);
    app.get('/experiments/scripts/new-script', newScriptHandler);
    app.post('/experiments/scripts/new-script', addScriptHandler);

    var mongoose = require("mongoose");

    var StatementSchema = mongoose.Schema({
        name: String,
        type: String,
        operation: String,
        inputs: [String],
        output: String
    }, {collection: "experiments.statement"});

    var Statement = mongoose.model("Statement", StatementSchema);

    var variables = [
        {name: 'Var 1'},
        {name: 'Var 2'},
        {name: 'Var 3'},
        {name: 'Var 4'},
        {name: 'Var 5'}
    ];

    var statements = [
        {type: 'number', operation: '+',           inputs: ['Var 1', 'Var 2'], output: 'Var 3'},
        {type: 'string', operation: 'concatenate', inputs: ['Var 1', 'Var 2'], output: 'Var 3'},
        {type: 'string', operation: 'indexOf',     inputs: ['Var 1'],          output: 'Var 3'},
        {type: 'string', operation: 'substring',   inputs: ['Var 1', 'Var 2'], output: 'Var 3'},
        {type: 'date',   operation: 'add',         inputs: ['Date 1', 'Date 2', ], output: 'Var 3'}
    ];

    function addScriptHandler(req, res) {
        console.log(req.body);
        Statement
            .create(req.body)
            .then(
                function(){
                    res.redirect("/experiments/scripts/script");
                }
            );
    }
    
    function newScriptHandler(req, res) {
        var data = {
            variables: variables,
            statements: statements
        };
        res.render('experiments/scripts/new-script', data);
    }

    function scriptHandler(req, res) {
        var data = {
            variables: variables,
            statements: statements
        };
        res.render('experiments/scripts/script', data);
    }

    function svgHandler(req, res) {
        res.render('experiments/svg');
    }

    function colorTableHandler(req, res) {
        res.render('experiments/colorTable');
    }

    function helloHandler(req, res) {
        res.render('experiments/hello.ejs');
    }

    function helloNameHandler(req, res) {
        var name = req.params.name;
        res.render('experiments/helloName.ejs', {data: {name: name}});
    }
};