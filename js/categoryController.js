wisdomApp.controller('categoryController', ['$scope', '$http', 'log', 'modeService', 'Constants', '$routeParams',
 function($scope, $http, log, modeService, Constants, $routeParams){
 	log.d("categoryController");

 	$scope.categoryId = $routeParams.categoryId;
 	log.d("categoryid: " + $scope.categoryId);

 	 $http.get('data/categoryData.json').success(function(data){
 		$scope.lists = data;
 		$scope.totalNum = $scope.lists.length;
		modeService.changeCurrentMode();
		// log.d("lists: " + $scope.lists);
 	});

}]);
