'use strict';

angular.module('Home')

.controller('HomeController',
  ['$scope', '$rootScope', '$location', '$cookieStore','AuthenticationService', 'HomeService', 'infiniteScrolling', 'ModalService',
  function ($scope, $rootScope, $location, $cookieStore, AuthenticationService, HomeService, infiniteScrolling, ModalService) {

    var sessionId = $cookieStore.get('sessionId');

    //Lazy load mockery
    $scope.listOfVideos = new infiniteScrolling(sessionId);

    $rootScope.username = $cookieStore.get('username');
    $scope.pageClass = 'fade';

    //unused - test purposes only
    $scope.logout = function() {
      AuthenticationService.Logout($cookieStore.get('sessionId'), function(response) {
        if(response.status === 'success') {
          $location.path('/login');
        } else {
          $scope.error = response.error;
          $scope.dataLoading = false;
        }
      });
    };

    //Rating function call from service
    $scope.rateFunction = function(rating, videoId) {
      HomeService.saveRating(sessionId, videoId, rating, function(result) {
        console.log('Rating action status: ', result.status);
      })
    };

    //Modal service for single video
    $scope.openModal = ModalService.openVideoModal;

  }])
.directive('videoHandler', function() {
  return {
    link: function() {

      var videos = $('video');
      for(var i = 0; i < videos.length; i++) {
        videos[i].addEventListener('play', function(){
          pauseAll(this);
        }, true);
      }

      function pauseAll(elem){
        for(var i = 0; i < videos.length; i++){
          //Is this the one we want to play?
          if(videos[i] == elem) continue;
          //Have we already played it && is it already paused?
          if(videos[i].played.length > 0 && !videos[i].paused){
            // Then pause it now
            videos[i].pause();
          }
        }
      }

    }
  }
})
.directive('whenScrolled', function() {
  //Do service call every time user reaches window-height - delta scroll point.
  return {
    link: function(scope, element, attrs) {
      var $window = $(window);
      $window.on('scroll', function() {
        var delta = 100;
        if ($(this).scrollTop() + $(this).height() > $(document).height() - delta) {
          scope.$apply(attrs.whenScrolled);
        }
      });
    }
  }
})
.directive('starRating', function() {
  return {
    restrict: 'EA',
    template:
    '<ul class="star-rating">' +
    '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
    '    <i class="fa fa-star"></i>' +
    '  </li>' +
    '</ul>',
    scope : {
      ratingValue : '=',
      onRatingSelected : '&'
    },
    link: function(scope, element, attributes) {
      $('body').css('background-color', 'white');
      var updateStars = function() {
        scope.stars = [];
        for ( var i = 0; i < 5; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue
          });
        }
      };
      scope.toggle = function(index) {
        scope.ratingValue = index + 1;
        scope.onRatingSelected({
          rating : index + 1
        });
      };
      scope.$watch('ratingValue',
        function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
      });
    }
  };
});
