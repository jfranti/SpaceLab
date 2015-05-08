spacelab.controller('InventoryCtrl', function InventoryCtrl($scope, InventoryFactory) {
  $scope.InventoryFactory = InventoryFactory;
  $scope.keycard = InventoryFactory.keycard;


  $scope.use_keycard = function() {
    if ($scope.keycard === 1){
      // open door
      $scope.keycard = 0;
    }
  };

<<<<<<< HEAD
=======
  $scope.use_murder_weapon = function() {
    InventoryFactory.use_murder_weapon();
  };
  

  console.log(InventoryFactory.murder_weapon);

>>>>>>> 229082daf9d2ba2a366c50adcad59347c18c0cdf
});
