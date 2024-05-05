var guestList = ["Sara","Maryam","Fatima","Ayesha"];

 var dontCome = guestList[0];

 console.log(dontCome, "unable to join us for dinner") ;

 guestList.splice(0,1, "Dua");

 //. exercise 16
 console.log("Good News ! we have found a Bigger Table for Dinner.");
 // adding a new guest at starting index of array
  guestList.unshift("Ali")
  // adding a new guest at ending index of array
  guestList.push("Zaid");

  //making a variable for storing a middle index of our guest list array
  var middleIndex: number= Math.floor(guestList.length /2);
//adding a new guest in middle iden of array 
guestList.splice(middleIndex,0,"Hamza");
//print message of updated list
console.log("updated list of our guest");
//sending invitation mess to our guest one by one with thier names 
guestList.forEach(oneguest=> console.log(`Salam ${oneguest},would you like to dinner with me ?`));