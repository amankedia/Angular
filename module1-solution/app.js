(function(){
  'use strict';

  angular.module('myApp', [])

  .controller('myController', function ($scope) {
  /*  $scope.name = "Aman";
    $scope.sayHello = function () {
      return "Hello Corsera!"; */
      $scope.name = "";
      $scope.totalCount = 0;
      $scope.Message = "";

      $scope.lunchCheckController = function () {
        if($scope.name == "")
          $scope.Message = "Please Enter Data First";
        else {
          var totalNameValue = splitString($scope.name, ',') ;
          $scope.totalCount = totalNameValue;
          if (totalNameValue > 3)
            $scope.Message = "Too Much";
          else
            $scope.Message = "Enjoy!";
          }
        };

      function splitString(stringToSplit, separator) {
          var arrayOfStrings = stringToSplit.split(separator);
          //console.log('The original string is: "' + stringToSplit + '"');
          //console.log('The separator is: "' + separator + '"');
          var stringLength = arrayOfStrings.length;
          var count = stringLength;
          for( var i = 0; i< stringLength; i++)
          {
            if (!arrayOfStrings[i].replace(/\s/g, '').length)
                count--;
          }
        //  console.log('The array has ' + count + ' elements: ' + arrayOfStrings.join(' / '));
          return count;
      }
  });
})();
