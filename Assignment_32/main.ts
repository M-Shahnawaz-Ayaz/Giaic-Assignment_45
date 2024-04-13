// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users :string[] = ["shahnawaz","Maha","Sana","Umair","Adil"]

let new_users : string[] = ["Majid","MAHA","Faisal","Maham","SHAHNAWAZ"]

let current_users_low = current_users.map(user=>
 user.toLowerCase());


for (let new_user of new_users ){

    let new_user_lower = new_user.toLocaleLowerCase();

    if(current_users_low.includes(new_user_lower)){
        console.log("This",new_user," is is already be used")
    }
    else {
        console.log("This",new_user,"is Free to use" )
    }
    }

// let currentUsers = ['ali','adil','asif','arif','arshad','moon'];
// let newUsers = ['Ali','adil','wajji','qamar','ameer','fahad'];
// let current_users_lower = currentUsers.map(user => user.toLowerCase());

// for (let new_user of newUsers) {

//     let new_user_lower = new_user.toLowerCase();
    
//     if (current_users_lower.includes(new_user_lower)) {
//         console.log(The username ${new_user}  is not available. Please enter a new username.);
//     } else {
//         console.log(The username ${new_user}  is available.);
//      }
//  }
