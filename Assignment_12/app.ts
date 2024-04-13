// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names : string[] = ["Shahnawaz","Maha","ali","Hussain","adil","Sana"]
let message : string = "Hey! friend what are you doing ?";
for(let key in names){

    console.log(message,names[key]);
}