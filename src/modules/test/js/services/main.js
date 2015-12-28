
var config = require('../../../../common/js/config.js');

angular.module("zmng.test")
	.factory("TestService", Service);

Service.$inject = ["$http"];

function Service($http) {
	return {
		
	    IGetData: function(id){
            return $http.get(config.base + 'temp/data.txt').then(function(res){
                return res.data;
            }, function(err){
                err.errMsg = "服务器异常";
                return err;
            });
        }
      
	}
}
