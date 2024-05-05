//define variables
let kiwi ="apple";
let uppercaseKivi ="KIWI";
let ten =10;
let twenty=20;
let fruits =["kiwi","apple","mango"];


//test for equality and inequality with strings 
console.log("Is kiwi is equal to kiwi?");
console.log(kiwi == "kiwi");

console.log("\nIs kiwi is not equal to kiwi ");
console.log(kiwi!="kiwi");

//test using lowercase function 
console.log("\nIs KIWI is equal to kiwi after converting to lowercase?");
console.log(uppercaseKivi.toLowerCase()== "kiwi"); 

console.log("\nIs KIWI is not equal to kiwi after converting to lowercase?");
console.log(uppercaseKivi.toLowerCase() != "kiwi"); 

//numerical tests
console.log("\n Is ten is eual to twenty ?");
console.log(ten == twenty);

console.log("\n Is ten is greater than zero?");
console.log( ten > 0);

console.log("\n Is twenty is less then 10?");
console.log( twenty < 10);

//greater than or equal to
console.log("\n Is ten is greater than or eual to 5?");
console.log(twenty <= 10);
//less than or equal to 

console.log("\n Is twenty is less then or equal to 10?");
console.log(twenty <= 10);
  
//test using "and" &"or" operators
// && operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ?");
console.log (twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log (twenty !=10 && twenty >30);

// || (OR) operator
console.log("\n 20 is greater than 50 OR  and 20 is equal to 20");
console.log (20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR  and 20 is not equal to 20");
console.log (20 > 50 || 20 != 20);

//test whether an item is include in array 
console.log ("\n Is mango include in my fruits array");
console.log (fruits.includes("mango"));

//not Include
console.log ("\n Is mango not include in my fruits array");
console.log (!fruits.includes("mango"));
