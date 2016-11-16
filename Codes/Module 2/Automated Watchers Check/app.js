(function () {
  'use strict';

  angular.module('myApp', [])

  .controller('myController', myController);

  myController.$inject = ['$scope'];

  function myController ($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function () {
      console.log("# of watchers", $scope.$$watchersCount);
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };

    $scope.upCounter = function () {
      $scope.counter++;
    };

    $scope.$watch (function () {
      console.log("Digest Loop Fired");
    });
    /*$scope.$watch('onceCounter', function (newValue, oldValue) {
      console.log("Once old value:", oldValue);
      console.log("Once new value:", newValue);
    });

    $scope.$watch('counter', function (newValue, oldValue) {
      console.log("Counter old value:", oldValue);
      console.log("Counter new value:", newValue);
    });
    */

  }


})();
