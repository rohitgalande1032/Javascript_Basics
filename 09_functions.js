
function printName() {
    console.log("Hello John");
}
//printName()

function addTwoNumbers(num1, num2) {  //Parameters --> function inputes caleed parameters
    console.log(num1+num2);
}
//addTwoNumbers(2,3)  //Arguments --> when we paas value called Arguments

//We can store function in variable in javascript
function multiplyTwoNum(n1, n2) {
    // let result = n1*n2
    // return result
    return n1*n2
}

const result = multiplyTwoNum(5, 6)
//console.log("Result", result);

function logInMessage(username){
    return `${username} just logged in`
}
//console.log(logInMessage("John"));

function calculatePrice( val1, ...num1) { //...Rest operator in Js
    return num1
}
//console.log(calculatePrice(200, 400, 500, 600));

const User = {
    username: "John",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(User)
handleObject({
    username: "Rohn",
    price: 399
})

