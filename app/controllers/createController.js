app.controller('createController', function ($scope) {
    $scope.workflowName = '';
    $scope.step = 'workflowDetails';


    $scope.nextStep = function () {
        if ($scope.step === 'workflowDetails') {

            $scope.step = 'assetPlanning';
            initMap();

        }
    };

    $scope.previousStep = function () {
        if ($scope.step === 'assetPlanning') {
            $scope.step = 'workflowDetails';
        } else if ($scope.step === 'saveWorkflow') {
            $scope.step = 'assetPlanning';
        }
    };

})
function initMap() {
    var mapOptions = {
        center: {
            lat: 12.9129842,
            lng: 77.6421466
        },
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
}
