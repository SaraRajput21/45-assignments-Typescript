//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define am array containing magician name 
var magician_names = ["Harry poter", "David", "Petter"];
// call the function to print each magician name 
show_magicians(magician_names);
