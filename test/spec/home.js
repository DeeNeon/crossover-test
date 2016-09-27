describe('Home Service Test (Video List)', function() {

  it('should get list of videos', inject(function($http, $httpBackend) {

    var $scope = {};

    /* Code Under Test */
    $http.post('http://localhost:5000/videos', {
        sessionId: 'randomId123456'
      })
      .success(function(data, status, headers, config) {
        $scope.user = data;
        expect($scope.user).toEqual({ status: 'success' });
      });
    /* End Code */

    $httpBackend
      .expectPOST('http://localhost:5000/videos', {
        sessionId: 'randomId123456'
      })
      .respond({
        status: 'success'
      });

    $httpBackend.flush();
  }));

  it('should get a single video', inject(function($http, $httpBackend) {

    var $scope = {};

    /* Code Under Test */
    $http.post('http://localhost:5000/video', {
        sessionId: 'randomId123456',
        videoId: 'abcdefghijk123456'
      })
      .then(function(data, status, headers, config) {
        $scope.status = data.status;
        expect($scope.status).toEqual(200);
      });
    /* End Code */

    $httpBackend
      .expectPOST('http://localhost:5000/video', {
        sessionId: 'randomId123456',
        videoId: 'abcdefghijk123456'
      })
      .respond({
        status: 200
      });

    $httpBackend.flush();
  }));

  it('should rate a video', inject(function($http, $httpBackend) {

    var $scope = {};

    /* Code Under Test */
    $http.post('http://localhost:5000/video/ratings?sessionId=randomId123456', {
        videoId: 'abcdefghijk123456',
        rating: 5
      })
      .then(function(data, status, headers, config) {
        $scope.status = data.status;
        expect($scope.status).toEqual(200);
      });
    /* End Code */

    $httpBackend
      .expectPOST('http://localhost:5000/video/ratings?sessionId=randomId123456', {
        videoId: 'abcdefghijk123456',
        rating: 5
      })
      .respond({
        status: 200
      });

    $httpBackend.flush();
  }));
});


