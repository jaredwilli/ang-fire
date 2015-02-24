"use strict";

angular.module('angFire.login', ['ngRoute', 'firebase'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

// Login controller
.controller('LoginCtrl', [
  '$scope',
  '$location',
  '$firebaseAuth',
  'commonProp',
  function($scope, $location, $firebaseAuth, commonProp) {

  var firebaseObj = new Firebase('https://jaredwilli.firebaseio.com');
  var loginObj = $firebaseAuth(firebaseObj);

  $scope.login = function(event) {
    event.preventDefault();

    var username = $scope.user.email;
    var password = $scope.user.password;

    loginObj.$authWithPassword({
      email: username,
      password: password
    })
    .then(function(user) {
      console.log('Authentication successful!', user);
      commonProp.setUser(user.password.email);
      $location.path('/home');
    }, function(error) {
      console.log('Authentication failed', error);
    });

  };
}])

.service('commonProp', function() {
  var user = '';
  return {
    getUser: function() {
      return user;
    },
    setUser: function(value) {
      user = value;
    }
  };
});
