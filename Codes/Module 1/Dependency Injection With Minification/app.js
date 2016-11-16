/*(function () {
  'use strict';

  angular.module('myApp', [])

  .controller('myController', myController);

  myController.$inject = ['$scope', '$filter'];
  function myController ($scope, $filter) {
    $scope.name = "Aman";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
})(); */
!function(){"use strict";function n(n,e){n.name="Aman",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("myApp",[]).controller("myController",n),n.$inject=["$scope","$filter"]}();
