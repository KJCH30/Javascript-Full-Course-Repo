//for_of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Character is: ${greet}`);
}

//Maps

const map = new Map(); //Contains only unique keys
map.set('IN', 'India')
map.set('US', "United States")
map.set('JP', 'Japan')
map.set("FR", "France")

map.set("IN", "India") //Since map contains only unique values, so this is not entered into the map
// console.log(map);

//Iterating Map

for (const key of map) { //We get Seperate Arrays of key-value pairs 
    // console.log(key);
}

for (const [key, value] of map) { //Destructuring Array to get key and value stored seperately
    // console.log(key, ':- ', value);
}

//Let's see what happens if we iterate objects using above methods
const myObj = {
    'game1' : 'RDR2',
    'game2' : 'NFS',
    'game3' : 'Cricket07'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':- ', value);
// }

/**This way we cannot iterate a object. There is different way to do that */