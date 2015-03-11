'use strict'

require('../../app/js/client');
require('angular-mocks');

describe('notes controller', function() {
  var $ControllerConstructor;
  var $httpBackend;
  var $scope;
  
  beforeEach(angular.mock.module('notesApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var notesController = $ControllerConstructor('notesController', {$scope: $scope});
    expect(typeof notesController).toBe('object');
    expect(Array.isArray($scope.notes)).toBe(true);
  });

  describe('REST Requests', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should have an index function', function() {
      $httpBackend.expectGET('/api/v1/notes').respond(200, [{noteBody: 'test note'}]);

      var notesController = $ControllerConstructor('notesController', {$scope: $scope});
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.notes[0].noteBody).toBe('test note');
    });

    it('should be able to save', function() {
      $httpBackend.expectPOST('/api/v1/notes').respond(200, {_id: 1, noteBody: 'test note'});

      $ControllerConstructor('notesController', {$scope: $scope});
      $scope.create({noteBody: 'test note'});
      $httpBackend.flush();

      expect($scope.notes[0]._id).toBe(1);
    });
  });
});
