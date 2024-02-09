//Singleton
// Object.create


//object literals
const mySym = Symbol("key1")

const JUser = {
    name : "Jishnu",
    [mySym]: "mykey1",  //this is the correct syntax of symbol representation
    "full name": "Jishnu Ray", //this cannot be accessed unless square notation is used
    age: 23,
    location: "Mohali",
    email: "kinjish30@gmail.com",
    isLoggedIn : false,
    lastLoggedIn: ["Tuesday", "Wednesday"]

}

// console.log(JUser.email); //This is a valid approach to access a object key but not recommended because it does not work in all scenarios
// console.log(JUser["email"]) //This works in all scenarios while accessing an object key

// console.log(JUser["full name"]);

// console.log(JUser[mySym]);

JUser.email = "jishkin30@microft.com" //If we want to change any value of a certain key, we do this
// Object.freeze(JUser)  //This is a way to  lock the data in a object
JUser.email = "kinjal422@google.com" //The email remains unchanged since the object data is locked
// console.log(JUser); 

JUser.greeting = function(){
    console.log("Hello Jish");
}

JUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
}
JUser.greeting()
JUser.greetingTwo()