'use strict';

var net = require('net');

var client = net.connect({port: 3000}, function() {
  client.write('GET / HTTP 1.1 neat wow cool awesome', function() {
    
  });

  client.end();
  client.on('data', function(data) {
    console.log(data.toString('utf-8'));
  });
});

