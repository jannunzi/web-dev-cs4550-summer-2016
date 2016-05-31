var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var assignment = require('./assignment/app.js');
assignment(app);

app.listen(3000);
