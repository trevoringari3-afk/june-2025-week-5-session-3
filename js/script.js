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

// parameters (input) and return (output)
/*

function functionName(parameters, parameters, parameters){
    parameters
    return value;
}

*/


let divide = (numberOne, numberTwo) => { return numberOne/numberTwo; }

console.log(divide(50, 33));

// Function to calculate area of a triangle
function triangleArea(base, height) {
  return 0.5 * base * height;
}

//Scope
//1. Global - anywhere
//2. Local - constrained to a block/function

const PI = 3.14152; //global variable

function circumference(radius){
    return 2 * PI * radius;
}

function test(){
    let message = "I am a local variable"
    console.log(message);
}

console.log(PI);

// DOM - Document Object Model
// getElementById() - id attribute.

let change = function(){
    //select the elements
    let intro = document.getElementById('intro')
    let body = document.getElementById('body')
    let paragraph = document.getElementById('paragraph')

    //manipulate - change
    body.style.backgroundColor = "lightgrey"
    body.style.margin = "50px"
    intro.textContent = "Introduction to Javascript Concepts"
    intro.style.textDecoration = "underline"
    paragraph.textContent = "Javascript is fun to use!"
    paragraph.style.color = "red"

    //add
    let newText = document.createElement("h3")
    newText.textContent = "This marks the end of our session on Introduction to JS!"
    newText.style.color = "green"
    newText.style.fontSize = "50px"
    document.body.appendChild(newText)

}