// Q NO : 01
var firstName = "M.Shahnawaz";
console.log("salam", firstName, "would you like to learn some python today");
// Q NO : 02
var personName1 = "M.Shahnawaz";
var upperCase = "M.SHAHNAWAZ AYAZ";
var lowerCase = "m.shahnawaz ayaz";
var titleCase = "M.Shahnawz Ayaz";
console.log("upperCase", upperCase, "lowerCase", lowerCase, "titleCase", titleCase);
// Q NO : 03
var personName = "M.Shahnawaz Ayaz";
// this is uppercase
console.log("personName =", personName.toLocaleUpperCase());
// This is lowercase
console.log("personName =", personName.toLowerCase());
// This is Titlecase
console.log("personName =", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
// Q NO : 04
// Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks: 
// Albert Einstein once said, “A person who never made a mistake never tried anything new.” 
var author_name = "Albert Einstein";
var quote = "A person who never make a mistake never tried anything new.";
console.log(author_name, "once said", quote);
