//array of current user
var current_users = ["zain", "zaviyar", "Sara", "ayesha", "zaid"];
// array of new users
var new_users = ["alina", "hamza", "Zain", "soniya", "sara"];
// loop through new users to check for usernames availbility
new_users.forEach(function (new_one_user) {
    //making condition username already exist and save in ourcondition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print diffrent messages using if else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is availble "));
    }
});
