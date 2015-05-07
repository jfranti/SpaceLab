spacelab.controller('PlotCtrl', function PlotCtrl($scope, PlotFactory) {
  $scope.PlotFactory = PlotFactory;
  $scope.keycard = PlotFactory.keycard;




  //MAIN RM METHODS/FUNCTIONS
  $scope.lights_off = function () {
    PlotFactory.examine_lights_off
  }

  $scope.turn_on_light = function () {
    if ($scope.lights_main = 0) {
      PlotFactory.use_lights;
      PlotFactory.lights = 1;
    }
  }



});
