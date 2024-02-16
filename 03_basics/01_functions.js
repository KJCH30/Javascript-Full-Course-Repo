// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(5, 6)

// const result = addTwoNumbers(3, 5)

// console.log(result); //This will show that result is undefined. 
//The reason is that the function addTwoNumbers is not returning anything as of now.

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(56, 70)
// console.log("Result: ", result)

function loginUserMessage(username){
    if(!username){ //this statement is equivalent to username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in!`
}

function loginUserMessage(username = "Jish"){ // this pass Jish as by default name in case no value  is passed

    if(!username){ //this statement is equivalent to username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in!`
}

console.log(loginUserMessage("Kinjal"));
console.log(loginUserMessage());