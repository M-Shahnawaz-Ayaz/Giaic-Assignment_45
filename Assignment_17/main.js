"use strict";
//   17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let guests:string[] = ["Maha","Sana","Majid","shah","umair"];
// // for(let key in guests){
// //     console.log("Respected Sir/Madam",guests[key],"\n\nWe invite you to take dinner with us to night\n\n Thank You");
// // }
// let not_present:string[] = ["shah"]
// let new_guest:string[] = ["Faisal"]
// guests = new_guest;
// for(let key in new_guest){
//     // console.log("Respected Sir/Madam",guests[key],"\n\nWe invite you to take dinner with us to night\n\n Thank You");
// }
// new_guest.unshift("Ali","Tariq","Sarfarz","shah","maha");
// // for(let key in new_guest){
// //     console.log("Respected Sir/Madam",guests[key],"\n\nWe invite you to take dinner with us to night\n\n Thank You");
// // }
// console.log("I can invite only two people for dinner because dinner table won’t arrive.\n\n")
// // console.log("I inform you that i found a bigger dinner table.so i add a new invition members")
// // console.log("Respected Sir/Madam",guests[key],"you’re sorry you can’t invite them to dinner.");
// for(let i = 0;i<=new_guest.length,i++;){
// console.log("Respected Sir/Madam",new_guest,"We invite you to take dinner with us to night");
// }
let guests = ["Maha", "Sana", "Majid", "shah", "umair"];
console.log("\nI can invite only two people for dinner because dinner table won’t arrive.\n");
let Remove = guests.splice(0, 2);
for (let key in guests) {
    console.log("Respected Sir/Madam", guests[key], "you’re sorry you can’t invite them to dinner.");
}
;
console.log("Respected Sir/Madam", Remove, "you still invited dinner with us at night");
Remove = guests.splice(0, 5);
console.group(guests);
