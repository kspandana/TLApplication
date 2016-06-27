'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:DemoController
 * @description
 * # DemoController
 * Controller of the sampleApp1App
 */
/* jsHint undef: true*/
angular.module('sampleApp1App')
        .controller('DemoController', function ($scope, $timeout) {
          console.log("loaded");
          $scope.timeLimit = 20;


        })
  .config(function (recorderServiceProvider) {
        recorderServiceProvider
          .forceSwf(window.location.search.indexOf('forceFlash') > -1)
          .setSwfUrl('lib/recorder.swf')
          .withMp3Conversion(true);
      });

