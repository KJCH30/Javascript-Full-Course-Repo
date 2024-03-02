const animals = ["lion", "tiger", "elephant", "horse", "snake"]

animals.forEach(function(animal){ //since the function is a callback fn, it doesnot require any name
 //   console.log(animal);
})

animals.forEach((janwar) => {
  //  console.log(janwar);
})

function printArray(item){
    // console.log(item);
}
// animals.forEach(printArray)


//let's look at what else parameters are there inside forEach()

animals.forEach( (item, index, arr) => {
    //console.log(item, index, arr); //this prints item, its index and the full array in each iteration
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})