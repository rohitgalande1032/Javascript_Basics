const name = "Rohit"
const count = 3000

//console.log((name + count + "Value")); //Dont use this, It's outdated

//Use this modern way
console.log(`My name is ${name} and count is ${count}`);

let getNmae = new String('Sanorita')
console.log(getNmae[0]);
console.log(getNmae.length);
console.log(getNmae.toUpperCase());
console.log(getNmae.charAt(4));
console.log(getNmae.indexOf('r'));


const newString = getNmae.substring(0, 4);
console.log(newString);

// In slice we can put negative index also
const anotherString = getNmae.slice(-8, 2)
console.log(anotherString);

//Trim method removes the Starting and end space
const newOneString = "   Rohit   "

console.log(newOneString);
console.log(newOneString.trim());

const url = 'https://rohitgalande%20com'

console.log(url.replace('%20', '-'));
console.log(url.includes('roh'));




