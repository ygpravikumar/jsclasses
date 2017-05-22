var app = angular.module("inputsApp", []);

var controller = app.controller("inputsController", ['$scope', function ($scope) {
    $scope.init = function () {
        initializeTaskVariables();
        $scope.alpha = _alpha;
        $scope.beta = _beta;
        $scope.delta = _delta;
        $scope.plim = _plim;
        $scope.zeta = _zeta;
    };

    $scope.updateVariables = function () {
        _alpha = $scope.alpha;
        _beta = $scope.beta;
        _delta = $scope.delta;
        _plim = $scope.plim;
        _zeta = $scope.zeta;
        updateTaskVariables();
    };

    $scope.next = function () {
        $scope.updateVariables();
    };

}]);