					
angular.module("zmng", [
	"ui.router",
	"ui.bootstrap",
	"ngAnimate",
	
	"zmng.main",
	"zmng.test"
]);

require("./config.js");	
require('./common/js/resize.js');