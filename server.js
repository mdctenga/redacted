var express = require('express');
var config = require('./config.json');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res) {
  res.render('form', req.body);
});

app.post('/', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

var server = app.listen(config.port);