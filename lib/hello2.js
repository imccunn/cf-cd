'use strict';

var app = exports = module.exports = {};

app.hello = function() {
	return 'hello world';
};

app.goodBye = function(name) {
	return 'goodbye' + name;
};
