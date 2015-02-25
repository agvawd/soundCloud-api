angular.module("sounder").controller("usersCtrl", function($scope, soundService, user){
	$scope.user = user;
})