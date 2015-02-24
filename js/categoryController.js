wisdomApp.controller('categoryController', ['$scope', '$http', 'log', 'modeService', 'Constants', '$routeParams',
 function($scope, $http, log, modeService, Constants, $routeParams){
 	log.d("categoryController");

 	$scope.categoryId = $routeParams.categoryId;
 	log.d("categoryid: " + $scope.categoryId);

 	// $scope.onSigninOptionSelect = function (){
 	// 	log.d("onSigninOptionSelect");
		// modeService.changeCurrentMode(Constants.STATE.STATE_SIGNIN_PAGE);
 	// };

 	// $scope.onSignupOptionSelect = function (){
 	// 	log.d("onSignupOptionSelect");
		// modeService.changeCurrentMode(Constants.STATE.STATE_SIGNUP_PAGE);
 	// };

}]);
