(function () {
  'use strict';

  angular.module('myApp', [])

  .controller('myController', myController);

  myController.$inject = ['$scope'];

  function myController ($scope) {
    $scope.firstName = "Aman";
  //  $scope.fullName = "";

    $scope.showNumberOfWatchers = function () {
      console.log("# of watchers:", $scope.$$watchersCount);
    };

    $scope.setFullName = function () {
      $scope.fullName = $scope.firstName + " " + "Kedia";
    };

    $scope.logFirstName = function () {
      console.log("First Name is: ", $scope.firstName);
    };

    $scope.logFullName = function () {
      console.log("Full Name is: ", $scope.fullName);
    };

  }


})();
