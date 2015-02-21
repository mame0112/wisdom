var wisdomApp = angular.module('WidsomApp', [])
.controller('WidsomController', ['$scope', function($scope){
	console.log("AAAA");
	$scope.message =  'Test message from controller';
}])

.directive('headerDirective', function(){
	return {
		templateUrl: 'header-directive.html'
	};
})

.directive('footerDirective', function(){
	return {
		templateUrl: 'footer-directive.html'
	};
});
