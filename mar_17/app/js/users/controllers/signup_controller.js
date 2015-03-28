'use strict';

module.exports = function(app) {
	app.controller('signupController', ['$scope', '$http', '$cookies', '$location', function($scope) {
		$scope.createNewUser = function() {
			$http({
				method: 'POST',
				url: '/api/v1/create_user'
			})
			.error(function(data) {
				console.log(data);
			})
			.success(function(data) {
				$cookies.eat = data.eat;
				$location.path('/notes');
			})
		};
	}]);
};