// const tinderUser = new Object() //Singleton Object
const tinderUser = {}  //Non-Singleton Object

tinderUser.id = "123abx"
tinderUser.name  = "Garry"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email : "sammy@gmail.com",
    name: {
        userFullName: {
            firstname : "Sammy",
            lastname: "Chandra"
        }
    }
}

// console.log(regularUser.name.userFullName.firstname);

const obj1 = {1: "A", 2: "B", 3: "C"}
const obj2 = {4: "D", 5: "E", 6: "F"}
const obj3 = {7: "G", 8: "H", 9: "I"}

//Now, how to combine all the objects in one?

// const obj4 = {obj1, obj2, obj3} //this actually does not combine all but instead it puts all three in another object
// const obj4 = Object.assign({}, obj1, obj2, obj3) //Here {} acts as the target object to which all the other objects are combined
const obj4 = {...obj1, ...obj2, ...obj3} // this is the use of spread operator to combine all objects into one
// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //Creates arrays of key-value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //this returns a boolean result whether this property of object exists

const course = {
    coursename : "JS in one shot",
    courseInstructor: "hitesh",
    courseDuration: "9 hours"
}

//object destructuring
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

//Following are JSON API calls example:

//Method 1:
// {
//     "name" : "Jish",
//     "courseName" : "JS in hindi",
//     "price" : "free"
// }

//Method 2:
[
    {},
    {},
    {}
]