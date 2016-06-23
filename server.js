var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');



var http = require('http');
var sockjs = require('sockjs');

var connections = [];

var chat = sockjs.createServer();
chat.on('connection', function(conn) {
    connections.push(conn);
    var number = connections.length;
    conn.write("Welcome, User " + number);
    conn.on('data', function(message) {

        // TODO: database insert/update/select

        for (var ii=0; ii < connections.length; ii++) {
            connections[ii].write("User " + number + " says: " + message);
        }
    });
    conn.on('close', function() {
        for (var ii=0; ii < connections.length; ii++) {
            connections[ii].write("User " + number + " has disconnected");
        }
    });
});

var server = http.createServer();
chat.installHandlers(server, {prefix:'/chat'});
server.listen(9999, '127.0.0.1');




app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({ secret: "thesecret" }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

var assignment = require('./assignment/app.js');
assignment(app);

require('./lectures/app.js')(app);
require('./experiments/hello.js')(app);
require('./wam/app')(app);

app.listen(3000);
