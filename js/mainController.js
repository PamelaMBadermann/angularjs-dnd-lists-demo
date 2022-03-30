angular.module("dragAndDrop", ["dndLists"]);
angular.module("dragAndDrop").controller("mainController", function ($scope,) {
    $scope.app = "AngularJS drag-and-drop-lists directives";

    $scope.items = [
        {
            selected: null,
            text: "AAA Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor."
        },
        {
            selected: null,
            text: "BBB Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor."
        },
        {
            selected: null,
            text: "CCC Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor."
        },
        {
            selected: null,
            text: "DDD Lorem ipsum dolor sit amet, consectetur adip minim veniam nulla pariatur auctor."
        },
    ];

    $scope.dropCallback = function (index, item, external, items) {
        console.log('dropped at', index, external);
        console.log(items)
        return item;
    };
});
