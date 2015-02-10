'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  
  console.log(req.url);
  switch (req.url) {
    case  '/first_route' : res.write('wow, first route\n');
      break;
    case '/second_route' : res.write('wow, second route\n');
      break;
    default : res.write('did not hit a route\nsuch http\n');
  }

  res.end('such http\n');
});

server.listen(3000);
