var teams = angular.module('TeamCtrl', []);

teams.controller('TeamCtrl', function($scope, $location, req, constants, convenience) {
	var url = constants.BASE_SERVER_URL + 'ministryteam/list';
	
	var success = function(data) {
		$scope.teams = data.data;
	};

	var err = convenience.defaultErrorCallback('TeamsCtrl',
		'Could not retrieve list of minstry teams from server');

	req.get(url, success, err);

	$scope.viewDetails = function(id) {
		$location.path('/app/teams/' + id);
	};
})

.controller('TeamDetailCtrl', function($scope, $stateParams, constants, req, convenience) {
    var teamId = $stateParams.id;
    
    var success = function(data) {
        var team = data.data;
        
        $scope.team = {
            name: team.name,
            description: team.description
        };
    };
    
    var err = convenience.defaultErrorCallback('TeamDetailCtrl',
		'Could not retrieve the selected minstry team from the server');
    
    var url = constants.BASE_SERVER_URL + 'ministryteam/' + teamId;
    
    req.get(url, success, err);
    
	$scope.openInFacebook = function() {
		// the SRS says that if a user wants to join a team they do it by
		// opening a facebook link in inappbrowser, but none exists in db...
	};
});