'use strict';

var readFile = require('./q_promise');

var file1 = readFile('hello.txt');
  file1.then(function(data) {
    console.log('data: ' + data.toString());
  }, function (err){
    console.log('error: ' + err);
  });
  file1.then(function(){
    
    //setTimeout(function(){
    console.log('this should call after');
    //}, 5000);
  });

var file2 = readFile('does_not_exists.txt');
  file2.then(function(data) {
    console.log('will not be called');
  }, function(err){
    console.log('error: ' + err);
  });
 
