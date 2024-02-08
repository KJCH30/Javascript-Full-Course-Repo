//Array declaration techniques
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["IronMan", "Captain America", "Hulk"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeroes[1]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(10) //This inserts element at the start. However, this isn't recommended as we need to shift entire array which is time consuming
myArr.shift() //Removes the element that was inserted at the start
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4)); //Returns the index of an element which is present in the array

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

//******slice, splice******/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //this take out a subarray excluding the last index of range and doesn't change the original array
console.log("Slice result", myn1);

console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) //this take out a subarray including the last index of range and the original array is changed
console.log("Splice result", myn2);

console.log("C ", myArr);

