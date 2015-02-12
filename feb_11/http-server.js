'use strict';

var http = require('http');
var unicornRoutes = require('./lib/unicorns-route');

var routes = [];
routes['/unicorns'] = unicornRoutes;

// essentially a JSON echo server
var server = http.createServer(function(req, res) {

  if (typeof(routes[req.url]) === 'function') {
    routes[req.url](req, res);
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({msg: 'page not found'}));
  }
});

server.listen(3333, function() {
  console.log('server listening...');
});
