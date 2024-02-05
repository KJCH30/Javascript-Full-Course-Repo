const name = "Kinjal"
const repoCount = 10

//console.log("Hello my name is "+ name + " and my repositories are "+repoCount); //this is not prefered as this method of string concat is outdated

//console.log(`Hello my name is ${name} and my repositories are ${repoCount}`) //this is known as string interpolation and the `` are used to insert placeholders in the message

const myGameName = "KJCH_30"

// console.log(myGameName[0]);
// console.log(myGameName.__proto__); //Returns object containing all prototype

// console.log(myGameName.length)
// console.log(myGameName.toLowerCase())
// console.log(myGameName.charAt(2))
// console.log(myGameName.indexOf('J'))

const newString = myGameName.substring(0, 4) //negative values if passed are ignored and the last index you passed in the parameter is also excluded
//console.log(newString)

const anotherString = myGameName.slice(-9, 4) //negative values are accepted here 
//console.log(anotherString)

const spacedString = "   Jish   C       "
//console.log(spacedString);
//console.log(spacedString.trim()); //This removes all the starting and ending extra spaces

const url = "https://google.com/kinjal%20chowdhury"
console.log(url.replace("%20", "-"))
console.log(url.includes('google'))

const myGameObj = new String('KJCH-30-com')
console.log(myGameObj.split('-'))