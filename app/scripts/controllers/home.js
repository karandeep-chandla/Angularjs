'use strict';

/**
 * @ngdoc function
 * @name kenticoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the kenticoApp
 */
angular.module('kenticoApp')
  .controller('HomeCtrl', function ($scope, Kentico, $http) {

  	Kentico.advs().then(function(data){
      $scope.k_adv = data.advs;
      $scope.k_why = data.k_why;
      $scope.expert = data.expert;
      $scope.k_pro = data.k_pro;
    })

    $scope.contactUs = {
      name:"",
      company:"",
      email:"",
      contact: "",
      message:""
    }

    $scope.submit_form = function(contactForm){
      alert("Submit Successfully");
    };
 	  			   			   
  });
