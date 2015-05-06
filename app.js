var spacelab = angular.module('spacelab', ['ui.router']);

spacelab.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    views: {
      'gui': {
        templateUrl: 'partials/gui.html',
        controller: 'PlotCtrl'
      },
      'inventory': {
        templateUrl: 'partials/inventory.html',
        controller: 'InventoryCtrl'
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'DialogCtrl'
      }
    }
  });
});
