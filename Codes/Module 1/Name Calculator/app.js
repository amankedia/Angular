(function(){
  'use strict';

  angular.module('myApp', [])

  .controller('myController', function ($scope) {
  /*  $scope.name = "Aman";
    $scope.sayHello = function () {
      return "Hello Corsera!"; */
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {
        var totalNameValue = calcNumForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calcNumForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++)
        {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }
  });
})();
