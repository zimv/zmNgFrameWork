/* http请求拦截器 */

var requestInterceptor = function($httpProvider) {
  return ['$q', function($q) {
    return {
      // On request success
      request: function(config) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';
        $httpProvider.defaults.withCredentials = true;

        if (config.data && typeof config.data === 'object') {
          config.data = $.param(config.data);
        }
        return config || $q.when(config);
      },

      // On request failure
      requestError: function (rejection) {
        // console.log(rejection); // Contains the data about the error on the request.

        // Return the promise rejection.
        return $q.reject(rejection);
      },

      // On response success
      response: function (response) {
        //console.log($httpProvider.defaults)
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';
        // console.log(response); // Contains the data from the response.

        // Return the response or promise.
        return response || $q.when(response);
      },

      // On response failture
      responseError: function (rejection) {
        // console.log(rejection); // Contains the data about the error.

        // Return the promise rejection.
        return $q.reject(rejection);
      }
    };
  }
];
}

module.exports = requestInterceptor;