/* JS Works abosolutely fine when comparisons are done between the same data types*/

// console.log(2 == 2)
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 <= 4)
// console.log(2 < 4)
// console.log(2 != 4)
// console.log(2 != 2)


/* But problem is tricky when you try to compare different datasets in JS*/

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null == 0) //this gives false which is fine because null means empty value
// console.log(null > 0) // same as above
// console.log(null >= 0); //but  this gives true which is unusual
// //The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// //Comparisons converts null to a number, treating as 0.  That's why null >= is true but null > 0 is false

// console.log(undefined == 0) 
// console.log(undefined > 0) 
// console.log(undefined < 0);
// console.log(undefined >= 0);
// Gives false no matter what 

// === this is strict check. It not only compares the values but also compares the datatypes
console.log(2 === 2)
console.log(2 === "2") //false because one is number and other is string
  