//define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define am array containing magician name 
let magician_names = ["Harry poter","David","Petter"];
 
// making a copy of original array through .slice ( function)
 let copy_magician_names = magician_names.slice();

 //modufied the copied array to include " the great " with thier names 
 let copy_great_magicians = make_great(copy_magician_names);

 //show both array original and copied
 //original
 console.log("Original Array\n")
 show_magicians(magician_names);

//copied
console.log("\nCopied Array")
show_magicians(copy_great_magicians);
