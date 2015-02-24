wisdomApp.controller('categoryController', ['$scope', '$http', 'log', 'modeService', 'Constants', '$routeParams',
 function($scope, $http, log, modeService, Constants, $routeParams){
 	log.d("categoryController");

 	$scope.categoryId = $routeParams.categoryId;
 	log.d("categoryid: " + $scope.categoryId);

 	 $http.get('data/categoryData.json').success(function(data){
 	 	$scope.result = data;
 	 	$scope.categoryName = $scope.result.categoryName;
 	 	$scope.params = $scope.result.params;
 		$scope.totalNum = $scope.params.length;

		modeService.changeCurrentMode();
		// log.d("lists: " + $scope.lists);
 	});

}]);
