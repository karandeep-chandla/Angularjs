'use strict';

/**
 * @ngdoc function
 * @name kenticoApp.controller:WhyCtrl
 * @description
 * # WhyCtrl
 * Controller of the kenticoApp
 */
angular.module('kenticoApp')
  .controller('WhyCtrl', function ($scope, whyKentico, $http) {
   
    whyKentico.power().then(function(data){
      $scope.k_pow = data.pows;
	  $scope.pow_hdg = data.pow_hdg;
	  $scope.pows_list = data.lists;	 
	  $scope.ken_ban = data.ken_ban;     
    })

    $scope.alignContent = function(index){
    	if (index%2 == 0){
    		return "pull-right"
    	}else{
    		return "pull-left"
    	}	
    }

    $scope.alignImage = function(index){
    	if (index%2 == 0){
    		return "pull-left"
    	}else{
    		return "pull-right"
    	}	
    }


  });

