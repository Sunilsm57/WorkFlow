var app = angular.module('myapp', ["ui.router", "angularUtils.directives.dirPagination"]);
app.controller('myController', [
    '$scope', 'DataService', function ($scope, DataService) {
        DataService.fetchData().then(function (data) {
            $scope.data = data;
            console.log($scope.data)
        }).catch(function (error) {});
    }

]);
