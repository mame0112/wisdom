wisdomApp.controller('SidebarController', ['$scope', 'Constants', function($scope, Constants){
 	console.log("SidebarController");
 	console.log(Constants.planetName);

 	$scope.Category = Constants.Category;

 	$scope.items = [
 		{id: 1, name: "test1"},
 		{id: 2, name: "test2"},
 		{id: 3, name: "test3"},
 	];

 	$scope.initialize = function() {
		console.log("initialize");
	 	console.log("datas: " + $scope.Category);
		setupItems();
 	};

 	$scope.isVisible = function() {
		console.log("isVisible");
 	};

 	var setupItems = function(){
 		console.log("setupItems");
 	};

}]);
