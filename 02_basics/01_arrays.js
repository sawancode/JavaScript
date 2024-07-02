const myArr = [1, 2, 3, 4, 5];
const myHeros = ["hulk", "thor"];
const myArray = new Array(1,2,3,4,5);

// Array methods

// myArr.push(6) // add array element last index.
// myArr.push(7) // add array element last index.
// myArr.pop(); // remove last index of value.

// myArr.unshift(0) // add a value of first index.
// myArr.shift() // remove a value of first index.

// console.log(myArr.includes(1)); // check the element present or not.
// console.log(myArr.indexOf(5)); // give the index of element. 

const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice method give index ke last element ko include nhi krega.

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // original array ko manupulate krta ha
console.log("C", myArr);
console.log(myn2);



