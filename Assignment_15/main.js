"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// let Guest : string[] = ["Maha","Shah","majid","shahzad"]
// for(let key in Guest){
//     console.log("Respested Sir/Madam",Guest[key],", \n\nI would like to invite to take a dinner to night with us\n\n Thank You")
// }
let guests = ["Maha", "Sana", "Majid", "shah"];
for (let key in guests) {
    console.log("Respected Sir/Madam", guests[key], "\n\nWe invite you to take dinner with us to night\n\n Thank You");
}
let not_present = ["shah"];
let new_guest = ["Faisal"];
guests = new_guest;
for (let key in new_guest) {
    console.log("Respected Sir/Madam", guests[key], "\n\nWe invite you to take dinner with us to night\n\n Thank You");
}
console.log("\n\nshah is not coming to take a dinner beacase he is ill");
