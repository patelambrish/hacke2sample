'use strict';

angular.module('hacke2App', ['hacke2App.auth', 'hacke2App.admin', 'hacke2App.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
