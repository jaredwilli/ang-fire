"use strict";

angular.module('angFire.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

// Home controller
.controller('HomeCtrl', [
  '$scope',
  'commonProp',
  function($scope, commonProp) {
    $scope.username = commonProp.getUser();

}]);
