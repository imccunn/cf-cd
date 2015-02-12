'use strict';

var Q = require('q');
var fs = require('fs');

module.exports = function(filename) {
  var deferred = Q.defer();
  fs.readFile(filename, function(err, data) { //should be null and a buffer
    if (err) {
      deferred.reject('santa claus');
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
};
