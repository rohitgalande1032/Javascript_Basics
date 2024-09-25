// Arrow Function
// this refers to current context 
const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()
console.log(this);


const Hello = () => {
    let name = "Sam"
    console.log(`Hello ${name}`);   
}
Hello()

const addTwo = (num1, num2) => {
    return num1+num2       //Explicite return
}
console.log(addTwo(6,7));

multiplyTwo = (num1, num2) => (num1*num2)  // Implisite return
console.log(multiplyTwo(4,5));



