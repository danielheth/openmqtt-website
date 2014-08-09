'use strict';

/* Controllers */

(function() {

angular.module('openmqtt')

	.controller('appController', ['$scope', '$location', function ($scope,$location) {
		//link global to service for controlling UI
		//$scope.isUserAuthenticated = function() { return userService.isAuthenticated(); };
		//$scope.getUsername = function() { return userService.getUsername(); };
		
		$scope.isActive = function(route) {
			return route === $location.path();
	    }
		

	}])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {templateUrl: 'templates/home.html', controller: 'homeController'})
			.when('/contact', {templateUrl: 'templates/contact.html', controller: 'contactController'})
			.when('/dashboard', {templateUrl: 'templates/dashboard.html', controller: 'dashboardController'})
			.otherwise({ redirectTo: '/home' })
		;
	}])


	.controller('homeController',['$scope', function($scope) {

	}])

	.controller('contactController',['$scope', function($scope) {

	}])

	.controller('dashboardController',['$scope', function($scope) {

		//{"#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#aa aa11","#22aa99","#994499"}
		var chartformatters = { number : [{ columnNum: 1, pattern: "$ #,##0.00" }] };


		//define chart number 1
		$scope.chart1 = {};
	    $scope.chart1.type = "PieChart";
	    $scope.chart1.data = [
	       ['Component', 'cost'],
	       ['Software', 50000],
	       ['Hardware', 80000],
	       ['Services',20000]
	      ];
	    $scope.chart1.options = {
	        displayExactValues: true, legend: 'none',
	        width: 400, height: 200,
	        chartArea: {left:5,top:5,bottom:0,height:"97%"},
	    };
	    $scope.chart1.formatters = chartformatters;
	    
	    //define chart number 1
		$scope.chart2 = {};
	    $scope.chart2.type = "BarChart";
	    $scope.chart2.data = [
	       ['Component', 'cost', {role: 'style'}],
	       ['Software', 50000, '#3366cc'],
	       ['Hardware', 80000, '#dc3912'],
	       ['Services',20000, '#ff9900']
	      ];
	    $scope.chart2.options = {
	        displayExactValues: true, legend: 'none',
	        width: 200, height: 200,
	        chartArea: {left:5,top:5,bottom:0,height:"97%"},
	    };
	    //$scope.chart2.formatters = chartformatters;
	    
	    //define chart number 1
		$scope.chart3 = {};
	    $scope.chart3.type = "LineChart";
	    $scope.chart3.data = [
	       ['Component', 'cost'],
	       ['Software', 50000],
	       ['Hardware', 80000],
	       ['Services',20000]
	      ];
	    $scope.chart3.options = {
	        displayExactValues: true, legend: 'none',
	        width: 400, height: 200,
	        chartArea: {left:5,top:5,bottom:0,height:"97%"},
	    };
	    $scope.chart3.formatters = chartformatters;
	    
	    //define chart number 1
		$scope.chart4 = {};
	    $scope.chart4.type = "ColumnChart";
	    $scope.chart4.data = [
	       ['Component', 'cost', {role: 'style'}],
	       ['Software', 50000, '#3366cc'],
	       ['Hardware', 80000, '#dc3912'],
	       ['Services',20000, '#ff9900']
	      ];
	    $scope.chart4.options = {
	        displayExactValues: true, legend: 'none',
	        width: 400, height: 200,
	        chartArea: {left:5,top:5,bottom:0,height:"97%"},
	    };
	    $scope.chart4.formatters = chartformatters;
	    




	}])

;


})();