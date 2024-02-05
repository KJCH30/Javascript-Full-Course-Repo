const score = 300
// console.log(score);
const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const decimalNumber = 201.6578
// console.log(decimalNumber.toPrecision(3));

const hundreds = 10000000 
// console.log(hundreds.toLocaleString('en-IN')) //by default it returns us number system. If we need india number system, we need to convert it.

//*************************************MATHS *************************************************************** */

// console.log(Math)
// console.log(Math.abs(-3))
// console.log(Math.round(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(6.1))
// console.log(Math.min(4, 3, 1, -3, 0))
// console.log(Math.max(5, 6, 9, 10, 99999))

// console.log(Math.random()) // By default it selects a random number between 0 and 1
// console.log(Math.random()*10 + 1) //Moves one decimal right, i.e 1 - 10
// console.log(Math.floor(Math.random()*10) + 1) //Moves one decimal right, i.e 1 - 10 and avoids BODMAS

const min = 1;
const max = 6;

console.log(Math.floor(Math.random()*((max - min) + 1)) + min) //This is the formula if we want random number from within a given range 

