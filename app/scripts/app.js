'use strict';

/**
 * @ngdoc overview
 * @name kenticoApp
 * @description
 * # kenticoApp
 *
 * Main module of the application.
 */
angular
  .module('kenticoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/why-kentico', {
        templateUrl: 'views/why-kentico.html',
        controller: 'WhyCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/why-us', {
        templateUrl: 'views/why-us.html',
        controller: 'WhyusCtrl'
      })
      .when('/get-in-touch', {
        templateUrl: 'views/get-in-touch.html',
        controller: 'GetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function ($rootScope, $location) {
    $rootScope.navs = [{d_name:'Home', url: "home"},{d_name:'Why Kentico', url: "why-kentico"},{d_name:'Work', url: "work"},{d_name:'Why us', url: "why-us"},{d_name:'Get In Touch', url: "get-in-touch"}]

    $rootScope.set_active = function(url){
      if ($location.path() == "/"+url){
        return true;
      }else {
        return false;
      }     
    }

  });
