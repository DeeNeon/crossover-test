describe('Authentication Service Test', function() {

  it('should post login data', inject(function($http, $httpBackend) {

    var $scope = {};

    /* Code Under Test */
    $http.post('http://localhost:5000/user/auth', {
        username: 'ali',
        password: 'password'
      })
      .success(function(data, status, headers, config) {
        $scope.user = data;
        expect($scope.user).toEqual({ username: 'ali' });
      });
    /* End Code */

    $httpBackend
      .expectPOST('http://localhost:5000/user/auth', {
        username: 'ali',
        password: 'password'
      })
      .respond({
        username: 'ali'
      });

    $httpBackend.flush();
  }));

  it('should post login data without success', inject(function($http, $httpBackend) {

    var $scope = {};

    /* Code Under Test */
    $http.post('http://localhost:5000/user/auth', {
        username: 'anotherUser',
        password: 'wrongPassword'
      })
      .then(function(data, status, headers, config) {
        $scope.status = data.status;
        expect($scope.status).toEqual(200);
      });
    /* End Code */

    $httpBackend
      .expectPOST('http://localhost:5000/user/auth')
      .respond({
        status: 200
      });

    $httpBackend.flush();
  }));

  it('should logout', inject(function($http, $httpBackend) {

    var $scope = {};

    /* Code Under Test */
    $http.get('http://localhost:5000/user/logout', {
        sessionId: 'randomId12345'
      })
      .success(function(data, status, headers, config) {
        $scope.status = data.status;
        expect($scope.status).toEqual(200);
      });
    /* End Code */

    $httpBackend
      .expectGET('http://localhost:5000/user/logout')
      .respond({
        status: 200
      });

    $httpBackend.flush();
  }));
});


