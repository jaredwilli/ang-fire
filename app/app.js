'use strict';

// Declare app level module which depends on views, and components
angular.module('angFire', [
  'ngRoute',
  'angFire.login',
  'angFire.register',
  'angFire.home'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/login'
	});
}]);
