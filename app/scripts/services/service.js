var phonecatServices = angular.module('kenticoApp');


phonecatServices.factory('Kentico', function($timeout, $http) {
    var Kentico = {
        fetch: function() {
            return $timeout(function() {
                return $http.get('kentico.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    }

    return Kentico;
});
