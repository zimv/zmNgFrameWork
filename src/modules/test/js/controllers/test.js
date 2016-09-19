angular.module("zmng.test")
	.controller("TestCtrl", Ctrl);

Ctrl.$inject = ["$scope", "ApiService"];
function Ctrl($scope, ApiService) {

	$scope.data = [];
	ApiService.IGetData().then(function(res){
		$scope.data = res;
	});
	
}