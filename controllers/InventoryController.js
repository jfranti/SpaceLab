spacelab.controller('InventoryCtrl', function InventoryCtrl($scope, InventoryFactory) {
  $scope.InventoryFactory = InventoryFactory;
  $scope.keycard = InventoryFactory.keycard;


  $scope.use_keycard = function() {
    if ($scope.keycard === 1){
      open door
      $scope.keycard = 0;
    }
  }
});
