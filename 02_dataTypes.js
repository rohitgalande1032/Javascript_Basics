"use strict" //treate all JS code as newer version

//alert(3+3) //we are using nodejs, not browser

let name = "Rohit"
let age = 18
let isLoggedIn = false

//number => 2 to power 33
//bigint
//string => true/false
//null => standalone value
//undefined => value not assigned
//symbol => unique


//objects

console.log(typeof(age));
console.log(typeof undefined); //undefined
console.log(typeof null);     //object


// 1. Prinitive
// 7 types ---> Stirng, Number, Boolean, null, undefined, Symbol, BigInt

// 2. Reference(Non primitive)
//Array, Objects, Functions

const heros = ["Shaktiman", "Sharukh", "Akshay"]

let myObj = {
    name: "Rohit",
    age: 22,
}

const myFun = function() {
    console.log("Hello");
}