(function() {
    //"use strict";

	angular.module("zmng").config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state("index", {
                url: "/index",
                templateUrl: "build/modules/main/templates/index.html",
            })

        $httpProvider.interceptors.push(require("./http.js")($httpProvider));

    }]);
})();


         