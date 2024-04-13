// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let student = {
    fullName :"Shahnawaz",
    age : 25,
    marks : 95,
    cgpa : 3.5
}
console.log(student);
console.log(student.fullName);
console.log(student.age);
console.log(student.marks);
console.log(student.cgpa);

// 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let country:string[] = ["Pakistan","India","Plestin","Iran","chine"]
// this is a error
// console.log(country[6]);

console.log(country[5]);



