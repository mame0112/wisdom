wisdomApp.controller('SidebarController', ['$scope', 'Constants', function($scope, Constants){
 	console.log("SidebarController");
 	console.log(Constants.planetName);

 	$scope.initialize = function() {
		console.log("initialize");
 	};

 	$scope.isVisible = function() {
		console.log("isVisible");
 	};

}]);
