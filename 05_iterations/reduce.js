/*
 * In reduce method, we pass two variables. One is accumulator and one is current value.
 * Initially, Accumulator takes up a initial value and stores inside it.
 * Accumulator stores the operation result received at the end of each iteration 
 * The value from which accumulator will begin its operation depends on initial value that is passed
 */

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( function(acc, currVal){
//     console.log(`accumulator: ${acc} and current value: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNum.reduce( (acc, currVal) => acc * currVal, 1)

// console.log(myTotal);

const shoppingCart = [
    {
        item: 'JS Course',
        price: 2999
    },
    {
        item: 'Python Course',
        price: 999
    },
    {
        item: 'Android Course',
        price: 5999
    },
    {
        item: 'Data Science Course',
        price: 12999
    },
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(PriceToPay);