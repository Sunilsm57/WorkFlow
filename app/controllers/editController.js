app.controller("editController", function ($scope, $http, $stateParams, $state) {
    var itemId = $stateParams.id;
    $scope.item = {};

    $http.get('http://localhost:5000/details/' + itemId).then(function (response) {
        $scope.item = response.data;
    }).catch(function (error) {
        console.error('Error fetching item data for editing:', error);
    });

    $scope.updateItem = function () {
        $http.put('http://localhost:5000/details/' + itemId, $scope.item).then(function (response) {
            $state.go('view', {id: itemId});
        }).catch(function (error) {
            console.error('Error updating item data:', error);
        });
    }
});
