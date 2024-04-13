"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let names = "Shahnawaz Ayaz", age = 25;
if (age < 2) {
    console.log("shahnawaz  is a baby.");
}
else if (age < 4) {
    console.log("shahnawaz is a kid.");
}
else if (age < 13) {
    console.log("shahnawaz is a teenager.");
}
else if (age < 20) {
    console.log("shahnawaz s an adult.");
}
else if (age < 65) {
    console.log("shahnawaz s an adult.");
}
if (age == 65 || age < 65) {
    console.log("shahnawaz is an older.");
}
else {
    console.log("shahnawaz is an elder");
}
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Apple", "Banana", "Mango"];
if (favorite_fruits.includes("orange")) {
    console.log(" you really like Orange!");
}
if (favorite_fruits.includes("Apple")) {
    console.log(" you really like Apple!");
}
if (favorite_fruits.includes("peach")) {
    console.log(" you really like Peach!");
}
if (favorite_fruits.includes("Mango")) {
    console.log(" you really like Mango!");
}
if (favorite_fruits.includes("Banana")) {
    console.log(" you really like Banana!");
}
