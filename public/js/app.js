define(function(){
	'use strict';

	angular.module("app",[
		'ngRoute',
    'MainModule'
	])
	.config(ApplicationConfig);


	function ApplicationConfig($routeProvider,$locationProvider){
		$locationProvider.html5Mode({
			enabled:true,
			requireBase:false
		});
		$routeProvider
			.when('/',{
				templateUrl:'/templates/home.html',
				controller:'MainController'
			})
			.otherwise({
				redirectTo: '/',
			})
	};


})
