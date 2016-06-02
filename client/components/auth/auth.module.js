'use strict';

angular.module('hacke2App.auth', ['hacke2App.constants', 'hacke2App.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
