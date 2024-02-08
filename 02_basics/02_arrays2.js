const marvel_heroes = ["IronMan", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const heroes = marvel_heroes.concat(dc_heroes) //combines two arrays and produce a new array
// console.log(heroes);

const all_heroes = [...marvel_heroes , ...dc_heroes] //this is spread operator which combines elements of two arrays
// console.log(all_heroes)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anotherArray = anotherArray.flat(Infinity) //flat method returns a single array containing all elements of subarrays. Instead of Infinity, we can write the depth of subarray that is to be simplified
 
// console.log(real_anotherArray); 

// console.log(Array.isArray("Kinjal")) //checks whether array or not
// console.log(Array.from("Kinjal")) //Creates a array with the elements passed
// console.log(Array.from({name: "Kinjal"})) //This output is interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //creates array from set of elements 
// console.log(Array.from(score1, score2, score3));  //This will throw error since no iterable objects is passed