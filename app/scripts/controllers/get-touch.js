'use strict';

/**
 * @ngdoc function
 * @name kenticoApp.controller:GetCtrl
 * @description
 * # GetCtrl
 * Controller of the kenticoApp
 */
angular.module('kenticoApp')
  .controller('GetCtrl', function ($scope, getKentico, $http) {
    
    getKentico.touch().then(function(data){
      $scope.touch = data.touch;
      $scope.hear = data.hear;
	})

    $scope.getTouch = {
      name:"",
      company:"",
      email:"",
      contact: "",
      subject: "",
      message:""
    }

    $scope.submit_form = function(contactForm){
      alert("Submit Successfully");
    };

  });
