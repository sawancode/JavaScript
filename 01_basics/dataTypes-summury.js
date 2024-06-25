// Thare are two types of data in JavaScript
// #premitive and #non-premitive

// Premitive data types divided into the 7 types
/*
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);


// const bigNumber = 83849038433299803948n;
// console.log(bigNumber);

//Reference (Non-Premitive)
/* 
Array
Objects
Functions
*/
// Array
const heros = ['Thor', "Hulk", "Strange"];

//Obj
let myObj = {
    name: 'sawan',
    age: 22,
}

//function
const myFun = function(){
    console.log("Hello Sawan");
}


