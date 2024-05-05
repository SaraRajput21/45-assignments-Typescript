//lower case 
var personName = "Babar";
console.log("lowercase:", personName.toLowerCase());
//uppe case
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
