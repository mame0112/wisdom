wisdomApp.controller('categoryController', ['$scope', '$http', 'log', 'modeService', 'Constants', '$routeParams',
 function($scope, $http, log, modeService, Constants, $routeParams){
 	log.d("categoryController");

 	var ACTIVE = "active";
 	var DISAVLED = "disabled";
 	var ITEM_IN_PAGE = 10;

 	var currentPage = 0;

 	$scope.categoryId = $routeParams.categoryId;
 	log.d("categoryid: " + $scope.categoryId);

 	 $http.get('data/categoryData.json').success(function(data){
 	 	log.d("data received");
 	 	$scope.result = data;
 	 	$scope.categoryName = $scope.result.categoryName;
 	 	$scope.params = $scope.result.params;
 		$scope.totalNum = $scope.params.length;

		shouldPrevBeShown();

		modeService.changeCurrentMode();
		// log.d("lists: " + $scope.lists);
 	});

 	 $scope.isActive = function(){
 	 	log.d("isActive");
 	 	return ACTIVE;
 	 };

 	 var shouldPrevBeShown = function(){
 	 	log.d("shouldPrevBeShown: " + $scope.totalNum);

 	 	var pageNum = parseInt($scope.totalNum/ITEM_IN_PAGE);

 	 	log.d("pageNum: " + pageNum);

 	 	if(pageNum >= 1){
 	 		return true;
 	 	} else {
 	 		return false;
 	 	}
 	 };

}]);
