//Array
const myArr = [2, 3, 4, 5, 6]
const names = ["Rohit", "Rohan"]

const myArr2 =  new Array(1, 2, 3, 4,5)
console.log(myArr2[0]);


//Array Methods
// 1. Push() --> Add element in array
myArr.push(7)
console.log(myArr);

// 2. Pop()  --> Remove last element
myArr.pop()  //no parameter
console.log(myArr);

// 3. unshift() --> Add element at first position, but it is time consuming because it shift all element
myArr.unshift(1);
console.log(myArr);

// 4. shift() --> Remove first element
myArr.shift() //no parameter
console.log(myArr);

// 5. includes() --> check element is present
console.log(myArr.includes(7)) // True/False

// 6. indexOf() --> Gives index of element, if emlement not present return -1
console.log(myArr.indexOf(4));

// 7. slice, splice
const myn1 = myArr.slice(1,3)
console.log("Original", myArr);

console.log("Slice", myn1); //Return elements from the range, last exclusive
console.log("A", myArr);


const myn2 = myArr.splice(1,3)
console.log("Splice", myn2); //It removes element from that range
console.log("B", myArr);

const marvelHero = ["Ironman", "thor", "Spiderman"]
const dcHero = ["Superman", "batman", "flash"]

// marvelHero.push(dcHero) //Add array inside array
// console.log((marvelHero));

// 8. concat --> Merge two array and return new array
const allheros = marvelHero.concat(dcHero);
console.log("Concat : ", allheros);

// 9. Spread -- Alternative for concat
const all_new_heros = [...marvelHero, ...dcHero]
console.log("Spread: ", all_new_heros);

// 10. flat --> If Array contains arrays inside, it return in single array
const another_array = [1, 2, 3, [4,5,6, [8, 9, 3]]]
const flat_array = another_array.flat(2); //Parameter contains depth

console.log("Flat Method : ", flat_array);

