spacelab.factory('PlotFactory', function PlotFactory() {
    var factory = {};



    //LIST OF VARIABLE PLOT ELEMENTS/EVENTS---------------------


    //MAIN ROOM----------------------
    factory.lights_main = 0;//LIGHTS OFF
    factory.blue_door_lock = 0;//BLUE DOOR IS LOCKED
    factory.lori_interface =
        // VIEW OF PAVEL'S BODY
    factory.pavels_hand = 0;
    factory.pavels_shirt_pocket = 0;
    factory.pavels_pants_pocket = 0;





    //PAVEL'S QUARTERS---------------


        //MIRROR VIEW




    //ELEMENTS OF DIALOGUE AND PLOT ACTIONS---------------------

    factory.turn_lights_on = function () {//TURN ON LIGHTS
        factory.lights_main = 1;
    };

    factory.unlock_blue_door = function () {//UNLOCK BLUE DOOR
        factory.blue_door_lock = 1;
    };

    factory.examine_pavels_hand = function () {
        factory.pavels_hand = 1;
    };

    factory.examine_pavels_shirt_pocket = function () {
        factory.pavels_shirt_pocket = 1;
    };

    factory.examine_pavels_pants_pocket = function () {
        factory.pavels_pants_pocket = 1;
    };



});
