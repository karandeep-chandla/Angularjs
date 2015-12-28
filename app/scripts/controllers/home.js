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

  	$http.get('./ken/kentico.json').success(function(data){
  		debugger
  	});

  	var products = $http.get('http://172.16.23.14:3000/products');
  	
  	products.then(function(data) {
    	$scope.phones = data.data.products;
    	
  	}); 

  	
    $scope.k_adv = [
					{heading: "Web Content Management", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/web-icon.svg'},
					{heading: "E-commerce", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/ecommerce-icon.svg'},
					{heading: "Online Marketing", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/marketing-icon.svg'},
					{heading: "Online Communities", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/communities-icon.svg'}
    			   ]

    $scope.k_why = [
					{heading: "Development &amp; Integration", text:"The Development &amp; Integration competency highlights our experience integrating Kentico with other business systems such as CRM systems like...", img:'/images/integration-icon.svg'},
					{heading: "Intranets", text:"The Kentico Intranet solution provides a compelling alternative to the bloatware that is Microsoft Sharepoint. We have successfully delivered Intranets...", img:'/images/intranets.svg'}
	   			   ]
	$scope.expert = 
					{heading: "We're Experts", text:"We have been working with Kentico since 2008 and we've built more than 200 websites on the platform. This wealth of experience has meant that we've come across almost every challenging component of Kentico, we've worked with almost every module", img:'/images/experts.svg'}
	   			      			   

	$scope.k_pro = [
					{heading: "Ecommerce", text:"Our team have extensive experience in customising Kentico to meet the ecommerce requirements of our clients. Kentico has recognised...", img:'/images/commerce-icon.svg'},
					{heading: "Project Delivered", text:"We've built more than 200 websites on the platform. This wealth of experience has meant that we've come across almost every challenging...", img:'/images/project-icon.svg'}
	   			   ]   			   			   
  });
