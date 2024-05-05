//18. seein the world think of atleat five places in the world you'd like to visit.
// .store the loacations in a array.  make sure the array is not in a alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// .print your array in its original order.
var countries = ['pakistan', 'turkey', 'paris', 'china', 'india'];
console.log('original order:', countries);
//print your array in alphabetical order without modefying the actual list .
console.log("alphabetical order:", __spreadArray([], countries, true).sort());
//• Show that your array is still in its original order by printing it.
console.log("still in its original order:", countries);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:", __spreadArray([], countries, true).reverse());
//• Show that your array is still in its original order by printing it again.
console.log("still in original order:", countries);
//• Reverse the original order of your list. Print the array to show that its order has changed.
console.log("original array reversed:", countries.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order;", countries.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in alphabetical order:", countries.sort());
//• we have changed again the original array order now in reverse order again 
console.log("original array reversed again:", countries.reverse());
