spacelab.controller('ButtonCtrl', function ButtonCtrl($scope) {

  $scope.examine = 0;
  $scope.use = 0;

  $scope.activateExamineCursor = function() {
    $scope.examine = 1;
    $scope.use = 0;
    console.log("EXAMINE MODE!~");
  };

  $scope.activateUseCursor = function() {
    $scope.examine = 0;
    $scope.use = 1;
    console.log("USE MODE!~");

  };

});
