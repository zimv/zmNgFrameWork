angular.module("zmng.test")
    .config(config)
    
config.$inject = ["$stateProvider"];
function config($stateProvider) {
	$stateProvider
		.state("test", {
			url : "/test",
			templateUrl : "build/modules/test/templates/test.html"
		})
};