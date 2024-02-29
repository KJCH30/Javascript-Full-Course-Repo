//for

for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// console.log(element); //this will generate an error because element is outside the scope

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value of j is ${j} and inner value i is ${i}`);      
        // console.log(`${i} * ${j} = ${i * j}`);  
    }    
}

let myArray = ["Spiderman", "IronMan", "Dr. Strange"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//Keywords helpful in loop

//Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Dedected index 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Dedected index 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}