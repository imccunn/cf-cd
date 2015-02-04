'use strict';

var expect = require('chai').expect;
var app = require('../index');

describe('app.js', function(){
	it('should take an input and greet input', function() {
		expect(app('world')).to.eql('hello world');
	});
	
	describe('should process process.argv', function() {
		var arg_cache;
		before(function() {
			arg_cache = process.argv;
			process.argv = ['node', 'index.js', 'world'];
		});

		it('should grab world from process.argv', function() {
			expect(app()).to.eql('hello world');
		});

		after(function() {
			process.argv = app.cache;
		});
	});
});


