angular.module("sounder").controller("tracksCtrl", function($scope, soundService, $sce){
	
	$scope.getTracks = function() {
		soundService.getTracks($scope.searchText).then(function(data){
			$scope.tracks = data;
		})
	}

	$scope.play = function(track_url){
		  SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
	      $scope.$apply($scope.iFrame = $sce.trustAsHtml(oEmbed.html));
	    });
	}
})