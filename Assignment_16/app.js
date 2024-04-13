"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guests = ["Maha", "Sana", "Majid", "shah"];
// for(let key in guests){
//     console.log("Respected Sir/Madam",guests[key],"\n\nWe invite you to take dinner with us to night\n\n Thank You");
// }
let not_present = ["shah"];
let new_guest = ["Faisal"];
guests = new_guest;
for (let key in new_guest) {
    // console.log("Respected Sir/Madam",guests[key],"\n\nWe invite you to take dinner with us to night\n\n Thank You");
}
new_guest.unshift("Ali", "Tariq", "Sarfarz");
for (let key in new_guest) {
    console.log("Respected Sir/Madam", guests[key], "\n\nWe invite you to take dinner with us to night\n\n Thank You");
}
console.log("I inform you that i found a bigger dinner table.so i add a new invition members");
