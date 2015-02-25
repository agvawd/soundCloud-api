var app = angular.module("sounder", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/tracks", {
		templateUrl: "js/tracks/tracksTemplate.html",
		controller: "tracksCtrl"
	})
	.when("/users/:userId", {
		templateUrl: "js/users/usersTemplate.html",
		controller: "usersCtrl",
		resolve: {
			user: function(soundService, $route) {
				debugger;
				return soundService.getUser($route.current.params.userId);
			}
		}
	})
	.otherwise({
		redirctTo: "/tracks"
	})
})