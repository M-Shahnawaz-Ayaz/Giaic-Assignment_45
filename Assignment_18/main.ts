// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.









// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Make sure the array is not in alphabetical order
let myPlaces: string [] = ["Karachi","Lahore","America","Islamabad","Quetta","Punjab"];
// console.log(myPlaces);

// making copy of an array
let copyOfArray = myPlaces.slice();
let SortedArray = copyOfArray.sort();
// console.log(SortedArray);
// printing original array
// console.log(myPlaces);

// reversing original array
//first we have to make a copy of original array
let copyOfArray2 = myPlaces.slice();
let reverseOrigArray = copyOfArray2.reverse();
// console.log(reverseOrigArray);


//  reverse the order of original array

let reverseOrigArray2 = myPlaces.reverse();
// console.log(reverseOrigArray2);

let againreverse = reverseOrigArray2.reverse();
// console.log(againreverse);   // same as original array

// sorting original array
 let sortOrigArray = myPlaces.sort();
 console.log(sortOrigArray);

 let reverseSortedArray = sortOrigArray.reverse();
 console.log(reverseSortedArray);