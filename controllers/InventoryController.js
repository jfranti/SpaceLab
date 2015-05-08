spacelab.controller('InventoryCtrl', function InventoryCtrl($scope, InventoryFactory) {
  $scope.InventoryFactory = InventoryFactory;
  $scope.keycard = InventoryFactory.keycard;


  $scope.use_keycard = function() {
    if ($scope.keycard === 1){
      // open door
      $scope.keycard = 0;
    }
  };

  $scope.use_murder_weapon = function() {
    InventoryFactory.use_murder_weapon();
  };
  

  console.log(InventoryFactory.murder_weapon);

});
