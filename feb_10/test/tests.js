'use strict';

require('../simple_http_server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('our http server', function() {

  var server = 'locahost:3000';

  it('should make a first request', function(done) {
    chai.request(server)
      .get('/first_route')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('wow, first route\n');
        done();
      });
  });

  it('should make a second request', function (done) {
    chai.request(server)
      .get('/second_route')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(err).to.have.status(200);
        expect(res.text).to.eql('wow, second route\n');
        done();
      });
  });
  it('should have a default route', function (done) {
     chai.request(server)
       .get('/some_other_route')
       .end(function(err, res) {
         expect(err).to.eql(null);
         expect(err).to.have.status(200);
         expect(res.text).to.eql('did not hit a route\nsuch http\n');
         done();
       });
  });
});
