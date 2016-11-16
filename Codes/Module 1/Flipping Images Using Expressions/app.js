(function () {
  'use strict';

  angular.module('myApp', [])

  .controller('myController', myController);

  myController.$inject = ['$scope'];
  function myController ($scope) {
    $scope.name = "Aman";
    $scope.stateOfBeing = "hungry";

    $scope.feedAman = function () {
      $scope.stateOfBeing = "fed";
    };
    $scope.sayMessage = function () {
      return "Aman likes to eat";
    };
  }
})();
