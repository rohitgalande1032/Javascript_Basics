//Object literals

//Declaration
const User = {
    name: "Rohit",
    age: 20,
    location: "Delhi",
    email: "rohit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(User);

//Access --> Using dot
console.log(User.name);
console.log(User.lastLoginDays);

// Singleton Method
const InstaUser = {}
InstaUser.id = 'abc'
InstaUser.name = "John"
InstaUser.isLoggedIn = false

console.log(InstaUser);

//Object.assign() --> copy properties from one or more objects, and return modified object
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "c", 4: "D"}

const obj3 = Object.assign(obj1, obj2)
console.log("Merged Object: ", obj3);


// Object.keys() --> Return all keys in array
console.log("Keys", Object.keys(User));

//Object.values() --> Return all Values in array
console.log("Values", Object.values(User));

// Check Property is available
console.log(User.hasOwnProperty('isLoggedIn'));



//******* Object Destructuring --> We use {} to Destructuring ***********/

const Course = {
    courseName: "Javascript",
    price: "1000",
    courseInstructor: "Rahn"
}


const {courseInstructor} = Course
console.log(courseInstructor); //Inplace of using Course.courseInstructor
