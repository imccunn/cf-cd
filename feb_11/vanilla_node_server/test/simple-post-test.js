'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
require('../http-server');

chai.use(chaihttp);

var expect = chai.expect;

describe('simple post request', function() {
  it('should respond to a post request', function(done) {
    chai.request('localhost:3333')
      .post('/unicorns')
      .send({hello: 'world'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('This was added on the server');
        done();
      });
  });
});
