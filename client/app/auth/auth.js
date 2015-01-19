// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    console.log('In signin')
    Auth.signin($scope.user)
      .then(function (token) {
        console.log(token)
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    console.log('IN SIGNUP')
    console.log('USER', $scope.user)
    // console.log($location)
    Auth.signup($scope.user)
      .then(function (token) {
        console.log("Success signing up")
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.log('ERROR SIGNING UP')
        console.error(error);
      });
  };
});
