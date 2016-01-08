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
      $scope.k_hdg = data.k_hdg;
      $scope.expert_hdg = data.expert_hdg;
      $scope.test_hdg = data.test_hdg;
      $scope.touch_hdg = data.touch_hdg;
      $scope.k_latests = data.latests;
      $scope.tests = data.test_slider;
      $scope.home_main = data.home_main;
      $scope.slides = data.slides;
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
 	  
    // $scope.images = [
    //     {
    //       src: "./images/testimonial-user.jpg",
    //       alt: "image 1",
    //       username: "Rosslyn Tebbutt",
    //       userProfile: "Founder, SampleBoard",
    //       slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"
    //     },
    //     {
    //       src: "./images/testimonial-user.jpg",
    //       alt: "image 2",
    //       username: "Rosslyn Tebbutt",
    //       userProfile: "Founder, SampleBoard",
    //       slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"
    //     },
    //     {
    //       src: "./images/testimonial-user.jpg",
    //       alt: "image 3",
    //       username: "Rosslyn Tebbutt",
    //       userProfile: "Founder, SampleBoard",
    //       slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it! They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"
    //     },
    //     {
    //       src: "./images/testimonial-user.jpg",
    //       alt: "image 4",
    //       username: "Rosslyn Tebbutt",
    //       userProfile: "Founder, SampleBoard",
    //       slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"
    //     }
    //   ]

  });
