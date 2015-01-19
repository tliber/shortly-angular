angular.module('shortly.links', [])

.controller('LinksController', function ($scope,$http,$location, Links) {
  	// $scope.data = {};
  	angular.extend($scope, Links)
  	
  	// $scope.links = Links
  	// $scope.text = 'PENISPENISPENIS'
  	// console.log(Links.getLinks(), '');
  	// console.log(getLinks())
  	// Links.getLinks($scope).then(console.log($scope.links))
  	// $scope.data = function(){
  		
  	// }
  	$scope.getLinks()
  	// console.log($scope.data.links)
  	// $scope.getLinks = function(){
  	// return $scope.data.links;
  	// };

  	// $scope.data.links = Links.getLinks()
});
