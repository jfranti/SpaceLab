spacelab.factory('PlotFactory', function PlotFactory() {
    var factory = {};



    //LIST OF VARIABLE PLOT ELEMENTS/EVENTS---------------------
    //MAIN ROOM----------------------
    factory.lights_main = 0;//LIGHTS OFF
    factory.blue_door_lock = 0;//BLUE DOOR IS LOCKED
    factory.pavels_body = 0;

        // VIEW OF PAVEL'S BODY
    factory.pavels_hand = 0;
    factory.pavels_shirt_pocket = 0;
    factory.pavels_pants_pocket = 0;
    factory.keycard = 0;
    factory.message = " ";

    //STAGES
    factory.lights = 0;
    factory.crime_scene = 0;
    factory.pavels_body = 0;
    factory.door = 0;
    factory.mirror = 0;



    //STARTING VIEW---------------
    factory.use_lights = function () {//TURN ON LIGHTS
        factory.lights_main = 1;
    };

    factory.examine_lights_off = function () {
      factory.message = "IT'S HARD TO TELL, BUT I THINK IT'S THE LIGHT SWITCH."
    };

    //LIGHTS ON VIEW---------------
    factory.examine_body = function () {//LOOK AT BODY
        factory.pavels_body = 1;
        factory.message = "THE BODY LIES BROKEN AND MANGLED, THE WORK OF SOME EVIL FORCE.";
    };

    factory.examine_lights_on = function () {
      factory.message = "IT'S THE LIGHT SWITCH. I THINK I'LL KEEP 'EM ON.'"
    };

    factory.examine_lori = function () {
      factory.message = "It's L.O.R.I. SHE'S THE AI THAT MONITORS SHIP FUNCTIONS."
    };

    factory.use_lori = function () {
      factory.message = "'L.O.R.I., WHAT HAPPENED HERE?' . . . NO RESPONSE."
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
        factory.message = "THERE IS SOMETHING INSIDE. IT FEELS HARD.";
    };

    factory.examine_keycard = function () {
      factory.message = "IT'S A KEYCARD. ON THE SIDE IT SAYS 'PAVEL KOSLOV'.";
    };

    factory.use_keycard = function () {
      factory.keycard = 1;
      factory.message = "IT'S THE KEY TO PAVEL'S QUARTERS."
    };




    //DOOR TO PAVEL'S QUARTERS---------------
    factory.use_keycard_on_blue_door = function () {//UNLOCK BLUE DOOR
        factory.blue_door_lock = 1;
        factory.message = "DOOR UNLOCKED.";
    };

    //PAVEL'S MIRROR---------------
    factory.examine_mirror = function () {
      factory.mirror = 1;
    };

    factory.use_mirror = function () {
      factory.mirror = 1;
    };


});
