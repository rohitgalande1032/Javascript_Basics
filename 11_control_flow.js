// IF- Else

const temp = 40
if(temp == 41){
    console.log("Equal to 40");
} else {
    console.log("Not equal to 40");
}

const userLoggegIn = true;
const creditCard = true
const byGoogleLoggedIn = true
const byEmailLoggedIn = true

if(userLoggegIn && creditCard){
    console.log("Allow to buy items")
}

if(byEmailLoggedIn || byGoogleLoggedIn){
    console.log("Successfully Logged in");
}


// Switch 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Choose valid month");
        break;
}

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")

