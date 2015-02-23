wisdomApp.controller('infobarController', ['$scope', '$http', 'log', function($scope, $http, log){
 	log.d("infobarController");
 	$http.get('data/mockdata.json').success(function(data){
 		$scope.lists = data;
		log.d("lists: " + $scope.lists);
 	});
}]);
