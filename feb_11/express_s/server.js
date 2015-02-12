'use strict';

var express = require('express');
var http = require('http');
var app = express();


var awesome = function(req, res, next) {
  req.awesome = 'woah, new awesome';
  next();
};

var middleWare = function(req, res, next) {
  console.log('hello from middleware');
  req.message = 'hello from middleware\n';
  req.thing = 3456;

  if (req.awesome) {
    return next(new Error('stuff was way too awesome'));
  }
  next();
};

var router = new express.Router();
router.get('/', function(req, res) {
  res.send('hello from router');
});

router.get('/bar', function(req, res) {
  res.send('from /bar');
});

app.use('/foo', router);

// this middleware will always run
app.use(middleWare);

// 'awesome' middleware will run after 'middleWare'
app.get('/', awesome, function(req, res) {
  res.send(req.awesome + ': ' + req.message + 'Hello world ' + req.thing);
});

app.get('/greet/:name/:title', function(req, res) {
  res.send('hello ' + req.params.title + ' ' + req.params.name + '\n');
});

app.get('/*', function(req, res) {
  res.status(404).send('page not found');
});

var server = http.createServer(app);

server.listen(process.env.PORT || 3333, function() {
  console.log('server started');
});
