angular.module("dragAndDrop", ["ngMessages"]);
angular.module("dragAndDrop").controller("mainController", function ($scope,) {
    $scope.app = "AngularJS drag and drop lists";

    $scope.items = [
        { text: "Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor." },
        { text: "Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor." },
        { text: "Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor." },
        { text: "Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor." },
    ];
});
