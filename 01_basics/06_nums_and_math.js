const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); //find out the length.
// console.log(balance.toFixed(2)); // give the precise value according to your requirement.

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // this method precise the values means convirt the increament values and exponential value.

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // convort the value according to standards.

// *************************** Math ********************************

// console.log(Math);
// console.log(Math.abs(-4)); // convert into absolute values means nagative value convert into a postive value.
// console.log(Math.round(4.9)); // round the given values means 4.4 give 4 and 4.5 give 5.
// console.log(Math.ceil(4.2)); // increase the values 4.1 give the value.
// console.log(Math.floor(4.9)); // give the value 4.1 to 4.9 give only 4
// console.log(Math.sqrt(25)); // find out the square root.

// console.log(Math.random()); // give the random values.
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
