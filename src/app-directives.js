'use strict';

/* Directives */

angular.module('openmqtt')


	.directive('headerBar', [function() {
		return {
	        restrict: 'AE',
	        //scope: {},
	        templateUrl: 'templates/header.html' 	
	    };
	}])

;