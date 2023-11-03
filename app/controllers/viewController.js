app.controller("viewController", function ($scope, $http, $stateParams, $state) {
    var itemId = $stateParams.id;
    $scope.item = {};
    $scope.viewItem = function (itemId) {
        $state.go('view', {id: itemId});
    }

    $scope.editItem = function (itemId) {
        $state.go('edit', {id: itemId});
    }
    console.log(itemId)
    $http.get('http://localhost:5000/details/' + itemId).then(function (response) {
        $scope.item = response.data;
    }).catch(function (error) {
        console.error('Error fetching item data:', error);
    });
});
