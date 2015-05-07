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
        controller: 'InventoryCtrl'
      },
      'satchel': {
        templateUrl: 'partials/satchel.html',
        controller: 'InventoryCtrl'
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'DialogCtrl'
      }
    }
  });
});


var soundtrack = $("<audio id='soundtrack' src='audio/FoxSynergy_Blue_Space_08.mp3' autobuffer='auto' preload controls></audio>");
$("#soundtrack").append(soundtrack);
soundtrack.attr('autoplay','autoplay');

// $('#soundtrack')[0].play();
