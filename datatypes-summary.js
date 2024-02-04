//Primitive: These types are all call by value. Meaning is that the direct memory cannot be accessed through these
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 345678912223141565n //Normally it will treat it as integer but when the number is too large and we write n at the end, it will treat it as big int

//Reference or Non-Primitive 
//3 types: Array, Objects, Functions

const cars = ["Maruti", "Volvo", "Mercedes"]
let myObj = {
    name: "Kinjal",
    age: 22,
    edu: "Engineer"
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myObj)