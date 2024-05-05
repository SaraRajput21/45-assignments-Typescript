//creating array
var userNames = ["zain", "zaviyar", "sara", "Admin", "ayesha"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array in Empty we need to find some users !");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("HELLO ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
;
