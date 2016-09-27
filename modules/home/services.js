'use strict';

angular.module('Home')

  .factory('HomeService',
    ['$http',
    function ($http) {
      return {
        saveRating: function (sessionId, videoId, rating, callback) {
          $http.post('http://localhost:5000/video/ratings?sessionId=' + sessionId, { videoId: videoId, rating: rating })
            .success(function (response) {
              callback(response);
            });
        }
      }
  }])
  .factory('infiniteScrolling',
    ['$http',
    function($http) {
      var infiniteScrolling = function(sessionId) {
        this.items = [];
        this.busy = false;
        this.sessionId = sessionId;
      };

      infiniteScrolling.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;

        $http.get('http://localhost:5000/videos?sessionId='+this.sessionId)
          .success(function(response) {
            var items = response.data;

            for (var i = 0; i < items.length; i++) {
              var sumRatings = items[i].ratings.reduce(function(a, b) { return a + b; });
              items[i].ratings = Math.round(sumRatings / items[i].ratings.length);
              items[i].name = items[i].name.substring(items[i].name.indexOf(']')+1);
              this.items.push(items[i]);
            }

            this.busy = false;
        }.bind(this));
      };

      return infiniteScrolling;
  }])
  .factory('ModalService',
    ['$modal',
    function($modal) {
      return {
        openVideoModal: function(item) {

          var modalInstance = $modal.open({
            templateUrl: '/modules/home/views/modal.html',
            backdrop: 'static',
            controller: function($scope, $modalInstance, $sce, item) {
              $scope.item = item;
              $scope.close = function() {
                $modalInstance.dismiss('cancel');
              };
            },
            size: 'lg',
            resolve: {
              item: function() {
                return item;
              }
            }
          });

        }
      };
}]);
