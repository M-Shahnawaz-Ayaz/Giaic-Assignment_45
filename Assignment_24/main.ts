// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
let fullName:string = "Shahnawaz"
console.log("Is shahnawaz == SHAHNAWAZ ? I predict FALSE")
console.log(fullName == "SHAHNAWAZ ");

console.log("Is shahnawaz == SHAHNAWAZ ? I predict True")
console.log(fullName !== "SHAHNAWAZ ");

// • Tests using the lower case function
console.log("Is Shahnawaz == shahnawaz ? I predict FALSE")
console.log(fullName == "shahmawaz");

console.log("Is Shahnawaz == Shahnawaz ? I predict True")
console.log(fullName == "Shahnawaz");


// • Tests using "and" and "or" operators
let a = 1 !== 1;
let b = 2 < 7 ;

console.log("I predict this statement is true")

if (a && b ){

    console.log(true);
}
else{
    console.log(false);      
};

let num1 = 2 == 2;
let num2 = 25 < 10;

console.log("I predict this statement is false")

if( num1 || num2){

    console.log(true);
}
else {
    console.log(false);
}

// • Test whether an item is in a array

let hero :string[] = ["superman","spiderman","batman","antyman","shahman"]

console.log("I predict that this statement is true...")
if(hero.length == 5){
    console.log(true)
}
else {
    console.log(false)
};


console.log("I predict that this statement is false...")

if(hero[2] == "spiderman"){
    console.log(true)
}
else {
    console.log(false)
};


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let n1 = 5;
let n2 = 10;
let n = n1 + n2 ;

if(n1 > n2){
    console.log("n1 is greater than n2 = " ,true);
}
else {
    console.log("n1 is not greater than n2 =", false);
}

if(n == n1-n2 || n == n1 + n2){
    console.log("n is addition to n1+n2 =", true);
   
}
else {
    console.log("1 is substrate to n1-n2 = " , false);
}



// • Test whether an item is not in a array
let Conditional={
fullName: "Sarfarz",
age : 45,
elder : "Brother",
gender : "male"
}  
let Conditiona2={
    fullName: "Faisal",
    age : 25,
    small : "Brother",
    gender : "male"
    }  

    if(Conditiona2.age < Conditional.age){
        console.log("Sarfarz is elder", true);
    }
    else{
        console.log("faisal is smaller", false);
    }

    if(Conditiona2.fullName == "Sarfarz"){
        console.log("is fullName sarfarz", true);
    }
    else{
        console.log("is fullName Faisal", false);
    }
