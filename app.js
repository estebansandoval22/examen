angular.module('exaApp', ['produc.controllers', 'produc.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "views/home.html"
		})
		.when('/list', {
			templateUrl: "views/list.html",
			controller: 'listController as list'
		})
		/*.when('/game/:id', {
			templateUrl: "",
			controller: ''
		})
		.when('/new', {
			templateUrl: "",
			controller: ''
		})*/
		.otherwise({
			redirectTo: '/'
		});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtPZraX8MdmIS3xxlK7hkMEE3PJ26AEZU",
    authDomain: "bdexamen.firebaseapp.com",
    databaseURL: "https://bdexamen.firebaseio.com",
    storageBucket: "bdexamen.appspot.com",
  };
  firebase.initializeApp(config);
});
