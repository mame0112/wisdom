wisdomApp.service('modeService', ['$rootScope', 'log', function($rootScope, log){

	var currentMode = 'test';

    return {
        getCurrentMode : function(){
            return currentMode;
        },

        changeCurrentMode : function(){
        	log.d("changeCurrentMode");
        	$rootScope.$broadcast('mode_changed', currentMode);
        }
    };
}]);