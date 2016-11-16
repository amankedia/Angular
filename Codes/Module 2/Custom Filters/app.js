(function () {
  'use strict';

  angular.module('myApp', [])

  .controller('myController', myController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  myController.$inject = ['$scope', 'lovesFilter'];

  function myController ($scope, lovesFilter) {
    $scope.name = "Aman";
    $scope.stateOfBeing = "hungry";

    $scope.feedAman = function () {
      $scope.stateOfBeing = "fed";
    };

    $scope.sayMessage = function () {
      return "Aman likes to eat healthy food";
    };

    $scope.sayLovesMessage = function () {
      var msg = "Aman likes to eat healthy food";
      msg = lovesFilter(msg)
      return msg;
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes","loves");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target,replace);
      return input;
    }
  }
})();
