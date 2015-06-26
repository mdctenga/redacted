var express = require('express');
var app = express();
var jade = require('jade');
var bodyParser = require('body-parser');
var config = require('./config.json');

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('form', { title: 'Hey', message: 'Hello there!'});
});

app.get('/', function(req, res) {
  res.send('Whazzup World');
});

app.post('/', function(req, res) {
  res.send('Post request to the homepage');
});

app.listen(config.port);