spacelab.factory('PlayerFactory', function PlayerFactory() {
    var factory = {};
    factory.playername = [];
    factory.gender = [];

    factory.setName = function(name) {
      this.playername.push({ name:name })
    };

    factory.setGender = function(gender) {
      this.gender.push({ gender:gender })
    };

});
