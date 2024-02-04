let score = "33"

//console.log(typeof score)

let valueInNumber = Number(score)
//console.log(typeof (valueInNumber))
//console.log(valueInNumber)

/* Outputs if score is =
"33" => 33 
"33abc" => NaN (Not a Number)
true => 1; false => 0 
*/

let isLoggedIn = "0"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/* Output for the following inputs */
// 1 => true; 0 => false
//"" => false
//"abc" => true

let someNumber = 77
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber));

/*************************OPERATIONS**************************************/

let value = 3
let negativeValue = -value
// console.log(negativeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2") //by default it concatenates
// console.log("1" + 2) //same as above
// console.log("1" + 2 + 2); //here since the first value was in string, JS assumes that next values will be in string and concatenates them without any further calculations
// console.log(1 + 2 + "2") // but in here, since the first two values are in integer/number, it first adds them and then concatenates the result with the string. This is due to the primitive value conversion rules of JS

// console.log(+true) //it converts true to 1 because + is used
// console.log(+"");  // it converts " " to 0
// console.log(true + 2); //since value of true is 1 and we are adding 2, it adds the numbers and gives 3
//All these conversions are not recommended in practice

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" because it increments x but when returned, it returns the original value first

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" because it increments a as well as returns the same whenever it is called
