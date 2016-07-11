/**
 * Created by spandanak on 6/30/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp1App.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the sampleApp1App
 */

angular.module('sampleApp1App')
  .controller('dashboardCtrl',function ($scope){
   // $scope.contentCollapse = false;
    $scope.collapseOne = false;

    $scope.test = function(){
      $scope.collapseOne = !$scope.collapseOne;

    };

    // $scope.test_toggle = function(){
    //   $scope.contentCollapse = !$scope.contentCollapse;
    // };
    $scope.toggle_visibility = function () {
      $scope.RecentlyListenedsub = !$scope.RecentlyListenedsub ;
    };
    $scope.toggle_latest = function(){
      $scope.MyLatestRecordingssub = !$scope.MyLatestRecordingssub ;
    };
    $scope.toggle_shared = function(){
      $scope.RecentlySharedWithMesub = !$scope.RecentlySharedWithMesub ;
    };

  });
