var express = require('express');
var config = require('./config.json');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('form', { title: 'Hey', message: 'Hello there!'});
});

app.post('/', function(req, res) {
  res.send('Post request to the homepage');
});

var server = app.listen(config.port);