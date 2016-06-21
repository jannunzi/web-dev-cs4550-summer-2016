var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

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
