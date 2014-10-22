/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name angBoulderTrainerApp
 * @description
 * # angBoulderTrainerApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angBoulderTrainerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timer'
      ])
  .config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/create', {
        templateUrl: 'views/planBuilder.html',
        controller: 'PlanBldrCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
