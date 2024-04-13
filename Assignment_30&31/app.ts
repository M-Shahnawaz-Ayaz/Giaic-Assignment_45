// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let userName :string[] = ["admin","Shahnawaz","Sana","Maha","Faisal","Umair"]
// for(let user of userName){
// if(user === "admin"){

//     console.log("Hello Admin would you like to see your status report")
// }
// else{
//     console.log( "Hello",user,"thank you for logging in again.")
// }
// }

// if(userName.includes("Shahnawaz")){

// console.log("Hello",userName[0],"would you like to see your status report")
// }
// else{
//     console.log( "Hello",userName[0],"thank you for logging in again.")
// }

// if(userName.includes("Sana")){
//     console.log("Hello",userName[1],"would you like to see your status report")
//     }
//     else{
//         console.log( "Hello",userName[1],"thank you for logging in again.")
//     }

//     if(userName.includes("Maha")){
//         console.log("Hello",userName[2],"would you like to see your status report")
//     }
//     else{
//         console.log( "Hello",userName[2],"thank you for logging in again.")
//     }

//         if(userName.includes("Faisal")){
//             console.log("Hello",userName[3],"would you like to see your status report")
//             }
//             else{
//                 console.log( "Hello",userName[3],"thank you for logging in again.")
//             }

//             if(userName.includes("Umair")){
//                 console.log("Hello",userName[4],"would you like to see your status report")
//                 }

//                 else{
//                     console.log( "Hello",userName[4],"thank you for logging in again.")
//                 }         


// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
import chalk from "chalk";
let userName1 :string[] = ["admin","Shahnawaz","Sana","Maha","Faisal","Umair"]
userName1.splice(0,6);
    if (userName1[0] === "admin" ){
        
        console.log("Hello Admin would you like to see your status report")
    }
else{
    
    console.log(chalk.bgBlueBright(" message : We need to find some users!"))      
            }


// Remove all arrays

// let users :string[] = [];

// for(let user of users){
// if(user){

// console.log("the message We need to find some users!")
// }
// else{
//     if(user === "admin"){

//         console.log("Hello Admin would you like to see your status report")
//     }
//     else{
//         console.log( "Hello",user,"thank you for logging in again.")
//     }
// }
// }
