var pizza = ["Chicken Tika", "Malai Cheese", "Fajita", "Creamy Tikka"];
//using for loop 
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
//print a message outside of the for loop 
console.log("pizza is Love");