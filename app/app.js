'use strict';

var jokesArray = [
  {id:1,question:'What is a catepillar afraid of?',answer:'A dogapillar!'}
  ,{id:2,question:'Finance + toys = ? ',answer:'Doll-ar'}
  ,{id:3,question:'What is a part of the body + insect = ? ',answer:'Butt-erfly'}
];

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
controller('MainCtrl', function($scope,$http,$attrs) {

      $scope.abc = 0 ;
      //$scope.jokequestion
      //$scope.jokeanswer = '';

  $scope.load = function(){
    $scope.jokes = jokesArray ;
  };

  $scope.load();

}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


