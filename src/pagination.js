var app = angular.module('paginationApp', [ ]);
app.controller('paginationContoller', function ($scope) {
  $scope.showData = function( ){
    $scope.curPage = 0;
    $scope.pageSize = 3;
    $scope.list = [
      {"name": "John","age":"16","title":"Software Engineer1"},
      {"name": "John2","age":"21","title":"Software Engineer2"},
      {"name": "John3","age":"19","title":"Software Engineer3"},
      {"name": "John4","age":"17","title":"Software Engineer4"},
      {"name": "John5","age":"21","title":"Software Engineer5"},
      {"name": "John6","age":"31","title":"Software Engineer6"},
      {"name": "John7","age":"41","title":"Software Engineer7"},
      {"name": "John8","age":"16","title":"Software Engineer8"},
      {"name": "John18","age":"16","title":"Software Engineer9"},
      {"name": "John28","age":"16","title":"Software Engineer10"},
      {"name": "John38","age":"16","title":"Software Engineer11"},
      {"name": "John48","age":"16","title":"Software Engineer12"},
      {"name": "John58","age":"16","title":"Software Engineer13"},
      {"name": "John68","age":"16","title":"Software Engineer14"},
      {"name": "John68","age":"16","title":"Software Engineer15"}
    ]
    $scope.numberOfPages = function() {
      return Math.ceil($scope.list.length / $scope.pageSize);
    };
  }
});

app.filter('pagination', function() {
  return function(input, start) {
    return input.slice(start);
  };
});
