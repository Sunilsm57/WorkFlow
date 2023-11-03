(function () {
    var app = angular.module('myapp');
    app.factory('DataService', [
        '$http', function ($http) {
            var service = {};

            service.fetchData = function () {
                return $http.get("http://localhost:5000/details").then(function (response) {
                    console.log(response.data)
                    return response.data;
                }).catch(function (error) {
                    console.error("Error fetching data:", error);
                });
            };
            return service;
        }
    ]);

    app.factory('EditService', [
        '$http', '$stateParams', function ($http, $stateParams) {
            var service = {};

            service.fetchDataForEdit = function () {
                var itemId = $stateParams.id;
                return $http.get("http://localhost:5000/details/" + itemId).then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error("Error fetching data for editing:", error);
                });
            };

            service.updateItem = function (item) {
                var itemId = $stateParams.id;
                return $http.put("http://localhost:5000/details/" + itemId, item).then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error("Error updating item data:", error);
                });
            };

            return service;
        }
    ]);
    app.factory('ViewService', [
        '$http', '$stateParams', function ($http, $stateParams) {
            var service = {};

            service.fetchDataForView = function () {
                var itemId = $stateParams.id;
                return $http.get("http://localhost:5000/details/" + itemId).then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error("Error fetching data for viewing:", error);
                });
            };

            return service;
        }
    ]);
})();
