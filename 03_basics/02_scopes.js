let a = 60
const b = 70
var c = 40
// this is global scope

if(true){
    //this is local scope
    let a = 50  // this follows the local scope constraints and cannot  be accessed outside this scope
    console.log("Inside the scope a: ", a);
    const b = 90 // this follows the local scope constraints and cannot  be accessed outside this scope
    console.log("Inside the scope b: ", b);
    var c = 400  // this doesn't allow the scope parameters and overrides any variable with the same name outside this scope
}

console.log("Outside scope a: ", a); //60
console.log("Outside scope b: ", b); //70
console.log(c); //400