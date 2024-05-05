//creating array
var userNames = ["zain", "zaviyar", "sara", "Admin", "ayesha"];
// for each loop 
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("HELLO ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
