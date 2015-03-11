'use strict';

var expect = chai.expect;
var greet = require('../../app/js/greeting');

describe('greet', function() {
  it ('should reet the universe', function() {
    expect(greet()).to.eql('hello universe');
  });
});
