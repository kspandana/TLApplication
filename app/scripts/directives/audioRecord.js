'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.directive:ngAudioRecorder
 * @description
 * # ngAudioRecorder
 * Controller of the sampleApp1App
 */
angular.module('sampleApp1App')
  .directive('ngAudioRecorder', function () {
    return {
      restrict : 'AE',
      templateURL : 'views/about.html'
    };
  });
