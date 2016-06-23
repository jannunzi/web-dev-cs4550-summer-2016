var http = require('http');
var sockjs = require('sockjs');

var connections = [];

var chat = sockjs.createServer();
chat.on('connection', function(conn) {
    connections.push(conn);
    var number = connections.length;
    conn.write("Welcome, User " + number);
    conn.on('data', function(message) {
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
server.listen(9999, '0.0.0.0');