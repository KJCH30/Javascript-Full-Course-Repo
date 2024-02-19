let a = 60
const b = 70
var c = 40
// this is global scope

if(true){
    //this is local scope
    let a = 50  // this follows the local scope constraints and cannot  be accessed outside this scope
    // console.log("Inside the scope a: ", a);
    const b = 90 // this follows the local scope constraints and cannot  be accessed outside this scope
    // console.log("Inside the scope b: ", b);
    var c = 400  // this doesn't allow the scope parameters and overrides any variable with the same name outside this scope
}

// console.log("Outside scope a: ", a); //60
// console.log("Outside scope b: ", b); //70
// console.log(c); //400

/******************************************************************************************************** */

// NESTED SCOPE: 

function one (){
    const username  = "Jishnu"

    function two(){
        const website = "GitHub"
        console.log(username);
    }
   // console.log(website); //this line gives an error since website is defined inside the scope of two

    two()
}

one()

// ************************** Interesting *********************************//

console.log(addOne(5)) //this is getting printed because once a function is initialized, it can be called from anywhere

function addOne(num){
    return num + 1
}

//addTwo(5) // this cannot be accessed since it is initialized using a variable. So, this part is actually before the variable was initialized

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(7))  //Now it gets printed