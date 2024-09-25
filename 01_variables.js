const accountId = 1223
let accoundEmail = "rohirgalande45@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

console.log(accountId)

console.table([accountId, accoundEmail, accountPassword, accountCity, accountState]);

/* 
1. Prefer not to use var
Because of issue in block scope and functional scope 

2. In Javascript, If you declared variable without assigning value, It supposed Undefined
*/