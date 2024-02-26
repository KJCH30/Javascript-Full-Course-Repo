//Comparison operators used in conditional if-else
/*
<  less than
>  greater than
== equal to
<= less than or equal to
>= greater than or equal to
!= not equal 
=== compare the value as well as datatype
!== strict checking second type
*/

//***if

// const temperature = 34

// if(temperature < 50){
//     console.log("Temperature is less than 50");
// }
// else{
//     console.log("Temperature is more than 50");
// }

// console.log("Execution complete...");

//**scope of if

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); ///this line will produce an error since power is defined inside if scope


//**Short Hand Notation of if statement */
const balance = 900
// if (balance < 1000) console.log("Low") , console.log("Deposit cash"); //this technique is not recommended since not readable

//**if, else if, else */

// if(balance < 500){
//     console.log("Deposit Cash");
// } else if(balance < 750){
//     console.log("Low balance");
// } else if(balance < 900){
//     console.log("Balance depleting");
// }else{
//     console.log("Good to go");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allowed to browse content");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User loggedIn");
}