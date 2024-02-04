"use strict"; //treat all JS code as newer version
//alert(3 + 3) // we are using node js, not broowser, so this will give error

console.log(3 + 3) //code readability should be high
console.log("This is a simple arithmetic")

let name = "Kinjal"
let age = 23
let  isLoggedIn = false

/* PRIMITIVE DATA TYPES */
//number => 2 to the power 53 usually this is enough for storing a number but just if the number is too large, bigint is used
//bigInt
//string =>""
//boolean => false/true
//null => standalone value
//undefined => appears if a value is not assigned (special type)
//symbol => unique

//object => 
console.log(typeof age)
console.log(typeof name)
console.log(typeof isLoggedIn)
console.log(typeof undefined) //this is a special type and its type is undefined
console.log(typeof null) //Object is printed because null is object type