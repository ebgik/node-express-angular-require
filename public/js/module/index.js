define(function(){
	'use strict';

	angular.module("MainModule",[])
	.controller("MainController",MainController)

	function MainController($rootScope,$scope,$location){
      $scope.title = 'Hello';
  }


})
