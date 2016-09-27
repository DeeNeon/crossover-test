'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

angular.module(
    'VideosApp',
    [
      'Authentication',
      'Home',
      'ngRoute',
      'ngCookies',
      'ngAnimate',
      'angular-md5',
      'ui.bootstrap'
    ]
)

.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = false;
    $httpProvider.interceptors.push(['$q', function ($q) {
      return {
        'responseError': function (rejection) {
          if (rejection.status === 401) {
            console.info('You are not authorized for this action.');
          }
          return $q.reject(rejection)
        }
      }
    }]);
  $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })

        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .otherwise({ redirectTo: '/login' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
  function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata;
      $rootScope.isLogged = true;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            $location.path('/login');
            $rootScope.isLogged = false;
        }
    });
  }]
)
  //Filter for long description text in videos.
.filter('cut', function () {
  return function (value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        //Also remove . and , so it gives a cleaner result.
        if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
          lastspace = lastspace - 1;
        }
        value = value.substr(0, lastspace);
      }
    }

    return value + (tail || ' …');
  };
});
