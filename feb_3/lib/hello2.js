'use strict';

var app = exports = module.exports = {}; // jshint ignore:line

app.hello = function() {
	return 'hello world';
};

app.goodBye = function(name) {
	return 'goodbye' + name;
};
