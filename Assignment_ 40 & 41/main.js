// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, artist_title, number_tack) {
    return [artist_name, artist_title, number_tack];
}
var a = make_album("shah", "ishq", 1);
var b = make_album("Maha", "Love store", 2);
var c = make_album("sana", "khani suno", 3);
console.log(a);
console.log(b);
console.log(c);
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(Magicians1) {
    for (var _i = 0, Magicians1_1 = Magicians1; _i < Magicians1_1.length; _i++) {
        var magic_1 = Magicians1_1[_i];
        console.log(magic_1);
    }
}
var magic = ["Harry", "sana", "shah", "maha", "ali"];
show_magicians(magic);
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(Magicians2) {
    for (var _i = 0, Magicians2_1 = Magicians2; _i < Magicians2_1.length; _i++) {
        var magician_1 = Magicians2_1[_i];
        console.log(magician_1, "the great");
    }
}
var magician = ["Harry", "sana", "shah", "maha", "ali"];
show_magicians(magician);
make_great(magician);
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because" the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function copy_array(magician3) {
    for (var _i = 0, magician3_1 = magician3; _i < magician3_1.length; _i++) {
        var magic_2 = magician3_1[_i];
        console.log(magic_2, "The great");
    }
}
var magician4 = ["Harry", "sana", "shah", "maha", "ali"];
show_magicians(magic);
copy_array(magician4);
