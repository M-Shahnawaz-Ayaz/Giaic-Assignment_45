// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// // • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinal_Numbers : number[] = [1,2,3,4,5,6,7,8,9];

for (let ordinal_Number of ordinal_Numbers){

    if(ordinal_Number === 1){
    console.log(`${ordinal_Number}st`)
}
else if (ordinal_Number === 2){
    console.log(`${ordinal_Number}nd`)
}
else if(ordinal_Number === 3){
    console.log(`${ordinal_Number}rd`)
}
else {
    console.log(`${ordinal_Number}th`)
}
}


// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let fvt_Pizzas : string[] = ["Caprese","Margherita","pepperoni"];
for (let pizza of fvt_Pizzas){
    console.log(pizza);
}

for (let i = 0; i < fvt_Pizzas.length; i++){
    console.log("I like",fvt_Pizzas[i],"pizza.");
}

console.log("I really love",fvt_Pizzas[0],"pizza!");
