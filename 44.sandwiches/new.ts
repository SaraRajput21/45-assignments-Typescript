function makeSandwich(...items: string[]){
    console.log("\nmaking a sandwich with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}
//call the funtion 3 times with 3 diffrent number arguments
makeSandwich("Chicken","Cabbage","GarlicSauce","Black pepper");
makeSandwich("Chicken","Chilisauce","Cucumber","Garlic");
makeSandwich("Chicken","Cheese","Black pepper");
