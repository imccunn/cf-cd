
'use strict';

module.exports = function(req, res) {

  if(req.method === 'POST') {
    var input = '';

    req.on('data', function(data) { // data will come in the form of a buffer
      input += data.toString('utf-8');
    });
    req.on('end', function(data) {
      var parsed = JSON.parse(input);
      parsed.msg = 'This was added on the server';
      res.writeHead(200, {'Content-Type': 'application/json'});

      res.write(JSON.stringify(parsed));
      res.end();      
    });
  } else if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.write(JSON.stringify({unicorn: "I'm a happy unicorn!"}));
    res.end();
  }
};

