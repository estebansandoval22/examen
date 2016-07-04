angular.module('videogames', ['videogames.controllers', 'videogames.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: ""
	})
	.when('/games', {
		templateUrl: "views/games.html",
		controller: 'listController as list'
	})
	.when('/game/:id', {
		templateUrl: "",
		controller: ''
	})
	.when('/new', {
		templateUrl: "",
		controller: ''
	})
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
