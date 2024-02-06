let myDate = new Date()
// console.log(myDate.toString()); //toString()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23) //Month in JavaScript starts from 0
//let myCreatedDate = new Date(2023, 0, 23, 5, 3) //Month in JavaScript starts from 0
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000)); //By this we get the second count 
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//To customize the date more, do the same as below

new Date().toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(newDate);