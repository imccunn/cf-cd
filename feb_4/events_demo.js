'use strict';

var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
var fs = require('fs');

var MyEventEmitter = function() {};

inherits(MyEventEmitter, EventEmitter);
var myEventEmitter = new MyEventEmitter();

myEventEmitter.on('moreDone', function(){
  console.log('Neat, more data.');
});

myEventEmitter.on('done', function(data) {
  console.log('data: ' + data.toString());
  this.emit('moreDone');
});

if (!process.argv[2]) {
  process.argv[2] = 'textfile.txt';
}

fs.readFile(process.argv[2], function(err, data) { // 'err' and 'data' can be called whatever you want
  if (err) throw err;
  myEventEmitter.emit('done', data);
});


myEventEmitter.emit('moreDone');

process.nextTick(function(){
  console.log('inside next tick');

});

console.log('first!!');
