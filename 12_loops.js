//For loop

const array = ["flash", "superHero", "batman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
   // console.log(element);  
}

//break and continue
for (let index = 0; index < 10; index++) {
    if(index == 7){
        //console.log(`detected ${index}`);
        break;
    }
    //console.log(`${index} is my favorite number`);
}
for (let index = 0; index < 10; index++) {
    if(index == 7){
        //console.log(`detected ${index}`);
        continue;
    }
    //console.log(`${index} is my favorite number`);
}


// While Loop
let index = 0;
while(index<=10){
    //console.log(`value of index is ${index}`);
    index++
}

let myArr = ["superman", "shaktiman", "batman"]
let i=0
while (i<myArr.length) {
    //console.log(`value is ${myArr[i]}`);
    i++
}

// do while loop

let score = 1;
do {
    //console.log(`value of score is ${score}`);
    score++;
} while (score<=10);

// for of loop

let arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

//for in loop

const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "c++", "swift"]
for(const lang in programming){
    //console.log(programming[lang]);   
}

//For each Loop
//For each function required callback function
const city = ["Pune", "Latur", "Mumbai", "Delhi"]
city.forEach(element => {
    console.log(element);
});