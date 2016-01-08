'use strict';

/**
 * @ngdoc function
 * @name kenticoApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the kenticoApp
 */
angular.module('kenticoApp')
  .controller('WorkCtrl', function ($scope, workKentico, $http) {
    
    workKentico.works().then(function(data){
      $scope.k_work = data.works;
	  $scope.work_ban = data.work_ban;
    })

  });
