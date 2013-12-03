'use strict';

angular.module('timesheetAssistantApp')
  .service('NotificationService', function NotificationService($q) {
    return {
    	alert: function(message, title, buttonName) {
    		var deferred = $q.defer();
    		if(navigator.notification) {
    			navigator.notification.alert(message, deferred.resolve, title, buttonName);    		
    		} else {
    			alert(message);
    			deferred.resolve();
    		}
    		return deferred.promise;
    	}    	
    }
  });
