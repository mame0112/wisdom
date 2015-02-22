var wisdomApp = angular.module('WidsomApp', [])
.controller('WidsomController', ['$scope', 'Constants', function($scope, Constants){
 	console.log("Test");
 	console.log(Constants.planetName);
//	console.log("planet: " + Constants.planetName);
	$scope.message =  'Test message from controller';
}]);
