//creating guest list array
var guestList = ["Sara", "Maryam", "Fatima", "Ayesha"];
//varialble for guest who cant come
var dontCome = guestList[0];
console.log(dontCome, "unable to join us for dinner");
// replace the guest who can't come with another one
guestList.splice(0, 1, "Dua");
// exercise 16
console.log("Good News ! we have found a Bigger Table for Dinner.");
// adding a new guest at starting index of array
guestList.unshift("Ali");
// adding a new guest at ending index of array
guestList.push("Zaid");
//making a variable for storing a middle index of our guest list array
var middle_Index = Math.floor(guestList.length / 2);
//adding a new guest in middle index of array 
guestList.splice(middle_Index, 0, "Hamza");
//print message of updated list
console.log("Updated list of our guests");
//sending invitation mess to our guest one by one with thier names 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me ?")); });
// exercise 17
//Inform that only two guests can be invited for the dinner 
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guests to dinner with me");
// remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner"));
}
//sending invitations to the last two guests on the list 
console.log("Invitations to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("Luckily, ".concat(lasttwo, ", you are still invited to dinner")); });
console.log("Final List:", guestList);
