wisdomApp.service('modeService', ['$rootScope', 'log', 'Constants', function($rootScope, log, Constants){

	var currentMode = Constants.STATE.STATE_HOME_NO_LOGIN;

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