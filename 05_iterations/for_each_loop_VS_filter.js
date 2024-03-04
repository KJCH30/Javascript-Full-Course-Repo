const coding = ['js', 'py', 'cpp', 'java', 'swift']

const values = coding.forEach( (item)=>{
    // console.log(item);

    return item
})

// console.log(values); //This will print undefined because in forEach we cannot traverse or store a list of item inside a variable 
//Also, foreach doesn't return a item

/**Filter
 * This is similar to forEach as this also needs a callback function to work. But, this can be stored inside a variable and also filter has the ability to return a list of item
 */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)

const newNums2 = myNums.filter( (num) => {
    return num < 7  //once we open scope, we have to return our condition
})

//Same work with forEach:
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

// console.log(newNums);
// console.log(newNums2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter( (bk) => bk.genre === 'History')

userBook = books.filter( (book) => {
    return book.publish >= 1995 && book.genre === "History"
})
console.log(userBook);