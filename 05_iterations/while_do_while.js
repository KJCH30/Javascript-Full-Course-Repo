//while loop
let index = 0

while(index <= 10){
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ["Cricket", "Football", "Badminton"]
let i = 0

while(i < myArray.length){
    // console.log(`Sport in array index ${i} is ${myArray[i]}`);
    i++;
}

//do-while loop

let score = 1
// score = 11 //this is special case for do-while. It executes at least once

do{
    console.log(`Score = ${score}`);
    score++
}while(score <= 10)