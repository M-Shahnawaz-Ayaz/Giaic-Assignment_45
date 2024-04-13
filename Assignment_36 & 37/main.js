"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`The shirt is ${size} and\n the message is ${message}`);
}
make_shirt("large", "Bonfire T.Shirt");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size = "large", message = "I Love TypeScript") {
    console.log(`the order size ${size} and about this shirt ${message}`);
}
make_shirt1();
make_shirt1("medium");
