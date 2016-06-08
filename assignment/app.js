module.exports = function(app) {

    var models = require("./models/models.js")();

    var userService = require("./services/user.services.server.js")(app, models);
    var websiteService = require("./services/website.service.server")(app, models);
    var widgetService = require("./services/widget.service.server.js")(app, models);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    app.get("/allusers/:username", function(req, res){
        var username = req.params['username'];
        for(var i in users) {
            if(users[i].username === username) {
                res.send(users[i]);
            }
        }
//        res.send(users);
    });

    app.get("/say/:message", function(req, res) {
        var msg = req.params["message"];
        res.send({message: msg});
    });
};
