const user = {
    username: "Kinjal",
    userId: 99,
    welcomeMessage : function(){
        console.log(`Welcome back, ${this.username} in this site`)
        console.log(this); //this prints the current context, this gives us a context of "this" keyword
    }
}

// user.welcomeMessage()
// user.username = "Partha"
// user.welcomeMessage()

// console.log(this); //gives us an empty object because it is referencing to the global node which is empty in this environment

function sample(){
    let username = "Urmila"
    console.log(this); //gives a lot of objects 
    console.log(this.username)//we cannot access a variable using this in a function. Hence, it returns undefined
}

// sample()

const sample2 = ()=>{ //Arrow Function declaration
    let username = "Urmila"
    console.log(this); //gives empty object
    console.log(this.username)//we cannot access a variable using this in a function. Hence, it returns undefined
}

//sample2()

const addNumbers = (num1, num2) =>{
    return num1 + num2 //explicit return
}
console.log(addNumbers(6, 7));

const multiplyNumbers = (num1, num2) => (num1 * num2) //implicit return

console.log(multiplyNumbers(6, 7));

const returningObject = () => ({filmName : "Kung Fu Panda"}) //syntax for returning implicit objects

console.log(returningObject());