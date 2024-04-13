// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["shahnawaz", "Maha", "Sana", "Umair", "Adil"];
var new_users = ["Majid", "MAHA", "Faisal", "Maham", "SHAHNAWAZ"];
var current_users_low = current_users.map(function (user) {
    return user.toLowerCase();
});
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLocaleLowerCase();
    if (current_users_low.includes(new_user_lower)) {
        console.log("This", new_user, " is is already be used");
    }
    else {
        console.log("This", new_user, "is Free to use");
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
