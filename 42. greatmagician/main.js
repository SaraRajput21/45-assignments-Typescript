//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define am array containing magician name 
var magician_names = ["Harry poter", "David", "Petter"];
//call make_great function to modify magician names
var great_magicians = make_great(magician_names);
// call show_magician that show list of magicians names
show_magicians(great_magicians);
