/* if
const isUserLoggedIn = true;

if(2 == '2'){
    console.log("execute");
}

if( 2 === '2'){
    console.log("execute or not");
}
else {
    console.log("false");
}

<, >, <=, >=, ==, !=, ===, 


const tempreture = 41;

if(tempreture < 50) {
    console.log("Less than 50");
}
console.log("Tempreture is greater than 50");


if(tempreture < 50) {
    console.log("Less than 50");
} 
else {
    console.log("Tempreture is greater than 50");
}

const score = 200;

if(score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // power is block scope that's why we can't access power outside the if block.


const score1 = 200;

if(score > 100) {
    var power = "fly"; // var is the global scope that why we can access the outside of if block.
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); 

const balance = 1000;

if(balance > 500) console.log("exe"), // single line condition.
console.log("exe2");


if(balance < 500){
    console.log("Less than 500");
}
else if(balance < 750) {
    console.log("Less than 750");
}
else if(balance < 900) {
    console.log("Less than 900");
}
else {
    console.log("Less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 2){
    // console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}

*/