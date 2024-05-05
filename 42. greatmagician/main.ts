//define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define am array containing magician name 
let magician_names = ["Harry poter","David","Petter"];

//call make_great function to modify magician names
let great_magicians = make_great(magician_names);

// call show_magician that show list of magicians names
show_magicians(great_magicians);
