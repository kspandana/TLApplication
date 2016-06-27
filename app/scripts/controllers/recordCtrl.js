'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:parentCtrl
 * @description
 * # recordCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('recordCtrl',function (){
  	//$scope.setBodyClass('hold-transition');
    console.log("Loaded");
    $scope.timeLimit = 10;
  })
  .config(function (recorderServiceProvider) {
  recorderServiceProvider
    .forceSwf(false)
    //.setSwfUrl('/lib/recorder.swf')
    .withMp3Conversion(true)
  ;
});
