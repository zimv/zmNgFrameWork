"use strict";
angular.module("zmng")
    .directive("loading", loading)

function loading() {
	return {
		restrict: "E",
		replace : true,
		templateUrl: "build/modules/layout/templates/loading.html"
	}
};



