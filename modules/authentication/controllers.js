'use strict';

angular.module('Authentication')

.controller('LoginController',
  ['$scope', '$rootScope', '$location', '$cookieStore', 'AuthenticationService',
  function ($scope, $rootScope, $location, $cookieStore, AuthenticationService) {

    // reset login status
    AuthenticationService.ClearCredentials();
    $scope.pageClass = 'fade';

    $scope.login = function () {
          $scope.dataLoading = true;
          $scope.isLogged = true;
          AuthenticationService.Login($scope.username, $scope.password, function(response) {
              //proceed to video list if success
              if(response.status === 'success') {
                  $rootScope.isLogged = true;
                  $rootScope.username = $scope.username;
                  $cookieStore.put('username',$scope.username);
                  $cookieStore.put('sessionId',response.sessionId);
                  AuthenticationService.SetCredentials($scope.username, response.sessionId);
                  $location.path('/');
              } else {
                  //Error UI handler
                  $scope.error = response.error;
                  $scope.dataLoading = false;
              }
          });
      };

}]);
