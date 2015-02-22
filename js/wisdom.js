var wisdomApp = angular.module('WidsomApp', ['ngRoute'])
.controller('WidsomController', ['$scope', 'Constants', function($scope, Constants){
 	console.log("WidsomController");
 	console.log(Constants.planetName);
//	console.log("planet: " + Constants.planetName);
	$scope.message =  'Test message from controller';
}])

.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'index.html',
			controller: 'UserDataController'
		}).
		when('/view', {
			templateUrl: 'template/userpage.html',
			controller: 'UserDataController'
		}).
		when('/template/:userId',{
			templateUrl: 'template/userpage.html',
			controller: 'UserDataController'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);
