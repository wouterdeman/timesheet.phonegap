'use strict';

angular.module('timesheetAssistantApp')
  .controller('MainCtrl', function ($scope, LocationService, NotificationService) {

  	LocationService.getCurrentLocation().then(function(position) {
  		NotificationService.alert('latitude: ' + position.coords.latitude + '  longitude: ' + position.coords.longitude, "Current Location", "Close");  		
	});

    /*//
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
*/
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Phonegap',
      'Bootstrap 3.0.2'
    ];
  });
