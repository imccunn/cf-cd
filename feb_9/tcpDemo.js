'use strict';

var net = require('net');
var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString('utf-8'));
  });

  socket.on('end', function() {
    socket.close();
  });
});

server.listen(3000);
