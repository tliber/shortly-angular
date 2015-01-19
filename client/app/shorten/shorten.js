angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope,$http, $location, Links) {
	angular.extend($scope, Links)
	$scope.link = '';  
	// console.a	
	$scope.addLink = function(link){
    console.log("from shawty")
    // console.log($post)
    // console.log($location)
    console.log(link, "in add link");
    // console.log(link)
    $http.post('/api/links',{data : link})
    .success(function(data) {
      console.log('success')
      // console.log(data)
     // }).failure(function(data){
     //  	console.log('fail')
     //  	console.log(data)
      })
    }

	  // $scope.addLink = function(){};
});
