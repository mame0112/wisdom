var wisdomApp = angular.module('WidsomApp', ['ngRoute'])
.controller('WidsomController', ['$scope', 'Constants', 'log', function($scope, Constants, log){
 	log.d("WidsomController");
 	log.d(Constants.planetName);
//	console.log("planet: " + Constants.planetName);
	$scope.message =  'Test message from controller';
}])

.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'view/toppage.html',
			controller: 'WidsomController'
		}).
		when('/view', {
			templateUrl: 'view/userpage.html',
			controller: 'UserDataController'
		}).
		when('/view/:userId',{
			templateUrl: 'view/userpage.html',
			controller: 'UserDataController'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);
