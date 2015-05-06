spacelab.factory('PlotFactory', function PlotFactory() {
    var factory = {};



    //LIST OF VARIABLE PLOT ELEMENTS/EVENTS---------------------
    //MAIN ROOM----------------------
    factory.lights_main = 0;//LIGHTS OFF
    factory.blue_door_lock = 0;//BLUE DOOR IS LOCKED
    factory.lori_interface =
    factory.pavels_body = 0;

        // VIEW OF PAVEL'S BODY
    factory.pavels_hand = 0;
    factory.pavels_shirt_pocket = 0;
    factory.pavels_pants_pocket = 0;
    factory.message = " ";

    //STAGES
    factory.lights = 0;
    factory.crime_scene = 0;
    factory.pavels_body = 0;
    factory.door = 0;
    factory.mirror = 0;



    //STARTING VIEW---------------
    factory.turn_lights_on = function () {//TURN ON LIGHTS
        factory.lights_main = 1;
    };

    //LIGHT'S ON VIEW---------------
    factory.inspect_body = function () {//LOOK AT BODY
        factory.pavels_body = 1;
    };


    //PAVEL'S BODY---------------
    factory.examine_pavels_hand = function () {
        factory.pavels_hand = 1;
        factory.message = "IT APPEARS TO BE HOLDING SOMETHING.";
    };
    factory.examine_pavels_shirt_pocket = function () {
        factory.pavels_shirt_pocket = 1;
        factory.message = "THERE IS SOMETHING INSIDE.";
    };
    factory.examine_pavels_pants_pocket = function () {
        factory.pavels_pants_pocket = 1;
        factory.message = "THERE IS SOMETHING INSIDE.";
    };



    //DOOR TO PAVEL'S QUARTERS---------------
    factory.unlock_blue_door = function () {//UNLOCK BLUE DOOR
        factory.blue_door_lock = 1;
        factory.message = "DOOR UNLOCKED.";
    };

    //PAVEL'S MIRROR---------------


});
