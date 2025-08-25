// variables
// Declaring variables
// 1. let keyword
// let variableName = value;

let country = 'Kenya'; //statement
let Country = 'Russia'
let COUNTRY = 'USA'

// 2. const keywords 
// const variableName = value;
const pi = 3.14152;

console.log(COUNTRY);
console.log(pi)

// Data Types
/*
Primitive (basic)

String - text
Numbers - Whole/Decimal
Boolean - true/false
Null - empty value
Undefined - declared variable, but not assugned a value

Non-primitive (complex)
Array - list of items
Objects - properties

*/

let isStudent = false; //boolean
let studentRecord = null;
let studentMarks;

let students = ['John', 'Mark', 'Jane', 'Mercy']

let car = {
    make: "Toyota",
    model: "Crown",
    yearOfManufacture: "2025",
    engineSize: "2000cc",
    tireSize: "22inches"
}

console.log(isStudent)
console.log(studentRecord)
console.log(studentMarks)
console.log(students)
console.log(students[0])
console.log(car)
console.log(car.yearOfManufacture)

const kenya = {
  name: "Kenya",
  capital: "Nairobi",
  population: 53770000,
  currency: "Kenyan Shilling (KES)",
  officialLanguages: ["English", "Swahili"],
  counties: 47,
  motto: "Harambee",
  independenceYear: 1963,
  callingCode: "+254"
};

console.log(kenya);

//operators - symbols that => action to perform

//assignment operator = 
// arithmetic operators - mathematical operations
console.log(10+20) //adittion
console.log(10-20) //subtraction
console.log(10*20) //multiplication
console.log(10/20) //division
console.log(10%8) //modulus

//comparison - compare values
// !=, !==, <, >, <=, >=, ==, ===
console.log(5 != "5") ///false
console.log(5 !== "5") ///true
console.log(5 == "5") ///true
console.log(5 === "5") ///false
console.log(5 < 10) ///true
console.log(5 <= 10) ///true
console.log(5 > 10) ///false
console.log(5 >= 10) ///false

//Functions

//1. function declaration (default)
/*

function functionName(){
    statements....
}

*/

function check(){
    console.log("How are you my friend...?")
}

check();

// 2. function expression - store a function as a value to a variable.

/**
 let variableName = function(){
    statements....
 } 
*/

let reply = function(){ console.log("...I be common person...") }

reply();

// 3. arrow function

/*

let variableName = () => {
    statement...
}

*/

let answer = () => console.log("...how do you do my friend...????")

answer();
