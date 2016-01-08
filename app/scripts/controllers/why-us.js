'use strict';

/**
 * @ngdoc function
 * @name kenticoApp.controller:WhyusCtrl
 * @description
 * # WhyusCtrl
 * Controller of the kenticoApp
 */
angular.module('kenticoApp')
  .controller('WhyusCtrl', function ($scope, whyusKentico, $http) {
   
    whyusKentico.us().then(function(data){
      $scope.k_whys = data.whys;
	  $scope.why_hdg = data.why_hdg;
	  $scope.why_ban = data.why_ban;
	})

    $scope.alignContent = function(index){
    	if (index%2 == 0){
    		return "pull-left"
    	}else{
    		return "pull-right"
    	}	
    }

    $scope.alignImage = function(index){
    	if (index%2 == 0){
    		return "pull-right"
    	}else{
    		return "pull-left"
    	}	
    }

  });
