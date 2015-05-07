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
      'current_item': {
        templateUrl: 'partials/current_item.html',
        controller: 'InventoryCtrl'
      },
      'cursors': {
        templateUrl: 'partials/cursors.html',
        controller: 'ButtonCtrl'
      },
      'satchel': {
        templateUrl: 'partials/satchel.html',
        controller: 'InventoryCtrl'
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'InventoryCtrl'
      }
    }
  });
});
