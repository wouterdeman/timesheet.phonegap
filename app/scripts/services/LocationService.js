'use strict';

angular.module('timesheetAssistantApp')
  .service('LocationService', function LocationService($q) {
    return {
    	getCurrentLocation: function() {
    		var deferred = $q.defer();
    		navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject);		    
    		return deferred.promise;
    	}
    }
  });
