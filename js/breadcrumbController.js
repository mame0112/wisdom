wisdomApp.controller('breadcrumbController', ['$scope', '$http', 'log', 'modeService', function($scope, $http, log, modeService){
 	log.d("breadcrumbController");
	// modeService.changeCurrentMode();

 	$scope.$on('mode_changed', function(event, param){
 		log.d("breadcrumbController Mode changed: " + param);
 	});
}]);
