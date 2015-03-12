'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []);

// services
require('./services/resource_service')(notesApp);

// controllers
require('./notes/controllers/notesController')(notesApp);

// directives

require('./js/directives/dummy_directive');
