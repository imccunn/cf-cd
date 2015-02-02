'use strict';

var expect = require('chai').expect; // npm looks for where chai is contained; no need for path
var hello = require('../lib/hello'); // assumes its a js file

describe('hello function', function() {
	it('should return hello world', function() {
		expect(hello()).to.not.eql('goodbye');
		expect(hello()).to.eql('hello world');
	});
	
});
