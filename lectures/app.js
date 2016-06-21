module.exports = function(app) {

    app.get('/lectures/script', scriptHandler);
    app.get('/lectures/hello/:name', helloHandler);

    var script = [
        {type: 'string'},
        {type: 'string'},
        {type: 'numeric'},
        {type: 'boolean'},
        {type: 'date'},
        {type: 'numeric'}
    ];

    function scriptHandler(req, res) {
        var data = {
            script: script
        }
        res.render('lectures/script/script', data);
    }

    function helloHandler(req, res) {
        var name = req.params.name;
        var data = {
            name: name
        };
        res.render('lectures/hello', data);
    }
};