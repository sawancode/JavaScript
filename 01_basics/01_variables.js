const accountId = 128; // const is doesn't changes
let accountEmail = "sawan@gmail.com"; // 
var accountPassword = "12844";
accountCity = "manawar"; // without using variable we can reserve a memory in javascript
let acountState; // undefined
// accountId = 2; // not allowed
accountEmail = "rdx@gmail.com";
accountPassword = "99383";
accountCity = "zirvi"; 
//console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword, accountCity, acountState]);
