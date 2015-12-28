angular.module("zmng.test")
	.controller("TestCtrl", Ctrl);

Ctrl.$inject = ["$scope", "TestService"];
function Ctrl($scope, TestService) {

	$scope.data = [];
	TestService.IGetData().then(function(res){
		$scope.data = res;
	});
	
}