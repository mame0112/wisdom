wisdomApp.controller('SidebarController', ['$scope', 'Constants', function($scope, Constants){
 	console.log("SidebarController");
 	console.log(Constants.planetName);

 	$scope.Category = Constants.Category;

 	$scope.initialize = function() {
		console.log("initialize");
		setupItems();
 	};

 	$scope.isVisible = function() {
		console.log("isVisible");
 	};

 	var setupItems = function(){
 		console.log("setupItems");
 	};

}]);
