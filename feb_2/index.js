'use strict';

var hello = require('./lib/hello.js');
var hello2 = require('./lib/hello2.js');

console.log(hello());

console.log(hello2.goodBye('Ian'));

process.argv.forEach(function(a) {
	console.log(a);
});
