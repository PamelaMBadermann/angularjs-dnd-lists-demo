angular.module("dragAndDrop", ["dndLists"]);
angular.module("dragAndDrop").controller("mainController", function ($scope,) {
    $scope.app = "AngularJS drag and drop lists";

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

    // $scope.dropCallback = function (event, index, item, external, type, allowedType) {
    //     if (external) {
    //         return false;
    //     }
    //     return item;
    // };

    // $scope.dropCallback = function(index, item, external, type) {
    //     $scope.logListEvent('dropped at', index, external, type);
    //     // Return false here to cancel drop. Return true if you insert the item yourself.
    //     return item;
    // };
});
