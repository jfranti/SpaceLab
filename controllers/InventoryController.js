spacelab.controller('InventoryCtrl', function InventoryCtrl($scope, InventoryFactory) {
  $scope.InventoryFactory = InventoryFactory;
  $scope.keycard = InventoryFactory.keycard;
  $scope.knife = InventoryFactory.murder_weapon;
  $scope.lockbox = InventoryFactory.lockbox;
  $scope.towel = InventoryFactory.towel;
  $scope.soap = InventoryFactory.soap;
  $scope.pda = InventoryFactory.pda;
  $scope.dog_tags = InventoryFactory.dog_tags;
  $scope.door = InventoryFactory.door_open;

  $scope.inventory = false;

  $scope.show_inventory = function() {
    $scope.inventory = !$scope.inventory;
  }



  $scope.use_keycard = function() {
    if ($scope.keycard === 1){
      // open door
      $scope.keycard = 0;
    }
  };

  $scope.use_murder_weapon = function() {
    InventoryFactory.use_murder_weapon();
  };

  $scope.open_door = function() {
    if (InventoryFactory.keycard === 1) {
      Inventoryfactory.open_door();
    }
  };



  console.log(InventoryFactory.murder_weapon);

});
