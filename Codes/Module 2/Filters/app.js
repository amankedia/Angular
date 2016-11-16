<!DOCTYPE html>
<html ng-App='myApp'>
  <head>
    <meta charset="utf-8">
    <script src="angular.min.js"></script>
    <script src="app.js"></script>
    <style>
      body
      {
          font-size: 1.3em;
      }
    </style>
    <title> Filters </title>
  </head>
  <body>
    <h1> Filters </h1>
    <div ng-controller='myController'>
      {{name}} has a message for you: <br>
      {{sayMessage()}}
      <div>
        <button ng-click="feedAman()">Feed Aman</button>
        Cost : {{cookieCost | currency : "@" : 4}}
        <br>
        <img ng-src = "images/aman_{{stateOfBeing}}.jpg">
      </div>
      <input type = "text" ng-model = "name" ng-blur="upper();">
    </div>
  </body>
</html>
