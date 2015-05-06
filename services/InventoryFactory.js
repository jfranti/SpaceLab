spacelab.factory('InventoryFactory', function InventoryFactory() {
    var factory = {};
    //LIST OF POSSIBLE INVENTORY ITEMS
    factory.keycard = 0;
    factory.murder_weapon = 0;
    factory.lockbox = 0;
    factory.phaser = 1;
    factory.towel = 0;
    factory.soap = 0;
    factory.pda = 0;
    factory.dog_tags = 0;
    //END OF INVENTORY LIST
    factory.pickup_keycard = function () {
        factory.keycard = 1;
    };
    factory.pickup_murder_weapon = function () {
        factory.murder_weapon = 1;
    };
    factory.pickup_lockbox = function () {
        factory.lockbox = 1;
    };
    factory.pickup_phaser = function () {
        factory.phaser = 1;
    };
    factory.pickup_towel = function () {
        factory.towel = 1;
    };
    factory.pickup_soap = function () {
        factory.soap = 1;
    };
    factory.pickup_pda = function () {
        factory.pda = 1;
    };
    factory.pickup_dog_tags = function () {
        factory.dog_tags = 1;
    };
    factory.drop_keycard = function () {
        factory.keycard = 0;
    };
    //
    //
    // factory.drop = function (item) {
    //     item = 0;
    // }
    //
    //
    // $scope.drop = function (item) {
    //     factory.drop(item);
    // }
    //
    //
    return factory;
});
