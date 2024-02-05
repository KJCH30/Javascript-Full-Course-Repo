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
  //  console.log("hello world")
}

console.log(typeof myObj)

/*********************************************Memory*********************************************************** */
//Stack(Stores Primitive) and Heap (stores Non-Primitive)
//Down below is the proof

let str1 = "Apple"
let str2 = str1

str2 = "Banana"
console.log(str1); //change in str2 doesn't affect str1 because a copy of str1 was provided to str2. This proves that it was stored in stack
console.log(str2);

let myUserOne = {
    username: "Kinjal",
    upi: "8234@ybl",
    email: "jish@gmail.com"
}

let myUserTwo = myUserOne
myUserTwo.email = "kin30@gmail.com"
console.log(myUserOne.email);
console.log(myUserTwo.email); // Since objects are stored in the heap, the variables are provided the original reference. So, change in either variables results in change in heap and thus, both share the same reference.