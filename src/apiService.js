//所有接口应该写在这里
var config = require('./common/js/config.js');

angular.module("zmng")
	.factory("ApiService", Service);

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
