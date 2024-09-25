//Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10]
// const newNums = myNums.filter((num) => num>4)
// console.log(newNums);

// const newNums = []
// myNums.forEach((nums) => {
//     if(nums>4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);


// Map
const newNums = myNums.map((num) => {
    return num + 10
})
console.log(newNums);

const newNums2 = []
myNums.forEach((num) => {
    newNums.push(num+10)
})
console.log(newNums2);


//Reduce
const updatedNum = myNums.reduce((acc, currVal) => { //It takes two parameter accumelator and Current value, and add currVal in acc and return sum
    console.log(`Accumelator: ${acc} and currVal: ${currVal}`);
    return acc+currVal
})
console.log(updatedNum);

