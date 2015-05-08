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

  $scope.use_keycard = function() {
    InventoryFactory.use_keycard();
  };

  $scope.use_murder_weapon = function() {
    InventoryFactory.use_murder_weapon();
  };

  console.log("CARD");
  console.log(InventoryFactory.keycard);


  $scope.open_door = function() {
    if (InventoryFactory.keycard === 1) {
      InventoryFactory.open_door();
    }
  };


  console.log("DOOR");
  console.log(InventoryFactory.door_open);


});
