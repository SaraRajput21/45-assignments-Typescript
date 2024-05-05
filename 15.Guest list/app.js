var guestList = ["Sara", "Maryam", "Fatima", "Ayesha"];
var dontCome = guestList[0];
console.log(dontCome, "unable to join us for dinner");
guestList.splice(0, 1, "Dua");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me ?")); });
