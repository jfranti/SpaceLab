var spacelab = angular.module('spacelab', ['ui.router']);

spacelab.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    views: {
    //   'gui': {
    //     templateUrl: 'partials/gui.html',
    //     controller: 'PlotCtrl'
    //   },
    //   'verb': {
    //     templateUrl: 'partials/verb.html',
    //     controller: 'PlotCtrl'
    //   },
      'inventory': {
        templateUrl: 'partials/inventory.html',
        controller: 'InventoryCtrl'
      },
    }
  });
});
