console.log("bird is in client.js");
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider"], function ($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl:"/views/routes/home.html"
  }).
  when('/projects', {
    templateUrl:"/views/routes/projects.html"
  }).
  when('/cats', {
    templateUrl:"/views/routes/cats.html"
  }).
  otherwise('/home', {
    redirectTo:"/home"
  });
});
