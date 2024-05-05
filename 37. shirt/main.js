"use strict";
function make_shirt(size = "Large", printmessage = "I Love TypeScript") {
    console.log(`Creating a ${size} with the ${printmessage} print on shirt`);
}
//callig a func with by default values
make_shirt();
//calling a function now with medium size and default message 
make_shirt("medium");
// calling a func now with small size and also Diffrent print message
make_shirt("small", "SARA");
