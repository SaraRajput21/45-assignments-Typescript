//array of current user
let current_users = [ "zain","zaviyar","Sara","ayesha","zaid" ];

// array of new users
let new_users =["alina","hamza","Zain","soniya","sara"];
 
// loop through new users to check for usernames availbility
new_users.forEach(new_one_user => {
    
    //making condition username already exist and save in ourcondition variable
    let our_condition = current_users.some(current_one_user=> current_one_user.toLowerCase() === new_one_user.toLowerCase() )
    
    // print diffrent messages using if else statement
    if(our_condition){console.log(`Sorry ${new_one_user} is already taken!`)
    }else{console.log(`This Username ${new_one_user} is availble `)}})


