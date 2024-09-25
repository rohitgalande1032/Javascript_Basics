//Promise One
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("promise consumed"); 
})

//Promise Two
new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async two resolved");
})

//Promise three

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "john", email:"john@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


//Promise Four
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'rohit', password: '123'})
        }else {
            reject('Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function(error){
    console.log(error);  
})

//Promise Five using async
const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username: "Rohit", passward: "12345"})
        }else{
            reject("Error: Something went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

//Promise six ----> Fetch

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E", error)
    }
}

getAllUsers()


