let userMail = "kjch@gmail.com" //assign any falsy values here,

// if(userMail){  //If any falsy value is found, this becomes false 
//     console.log("Got the email");
// }else{
//     console.log("No email found");
// }

/**falsy values -> If such value is assigned to a variable, we assume that variable to contain false value
 
false, 0, -0, BigInt = 0n, "", null, undefined, NaN */

/**truthy values -> Any value that is assigned other than falsy values is considered to be true. Some tricky ones are below:
 * "0", 'false', " ", {}, [], function(){}
 */

userMail = []
//check if empty array is passed
if(userMail.length === 0){
    console.log("Array is Empty");
}

userMail = {}
//check if empty object is passed
if(Object.keys(userMail).length == 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null, undefined 
/* This operator is used to replace a null or undefined value with a default value. 
 * It is useful when working with databases. Often we receive null or undefined values from the database. So, with this we can replace all those into default values*/

let val1 = 5 ?? 10 //first value is not null, so it prints 5
let val2 = null ?? 10 //first value is null, so prints 10
let val3 = undefined ?? 15 //first value is undefined, so prints 15
let val4 = null ?? 3 ?? 34 //It returns the very first value that it gets

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

/**Ternary Operator */

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");