
var io = require("socket.io");
var socket = io.listen(1224, "127.0.0.1");
var people = {};

socket.on("connection", function (client) {
    client.on("join", function(name){
        people[client.id] = name;
        client.emit("update", "You have connected to the server.");
        socket.sockets.emit("update", name + " has joined the server.")
        socket.sockets.emit("update-people", people);
    });

    client.on("send", function(msg){
        socket.sockets.emit("chat", people[client.id], msg);
    });

    client.on("disconnect", function(){
        socket.sockets.emit("update", people[client.id] + " has left the server.");
        delete people[client.id];
        socket.sockets.emit("update-people", people);
    });
});





var http = require('http'),
fs = require('fs'),
io = require('socket.io'),
index;
fs.readFile('./chat.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
var server = http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(index);
    response.end();
}).listen(1224);
//and replace var socket = io.listen(1224, "1.2.3.4"); with:
var socket = io.listen(server);