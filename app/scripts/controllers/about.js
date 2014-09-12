'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
