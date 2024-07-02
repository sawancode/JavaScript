/* JavaScript date objects represent a single moment in time in a platform indepenent formate. 
Date object encapsulate an intergral number that represens miliseconds since 
the midnight at the begning of january 1, 1970, UTC (the epoch.)
*/

let myDate = new Date();
// console.log(myDate.toString()); // give the day, month, year and timing.
// console.log(myDate.toDateString()); // give the day, month, date and year.
// console.log(myDate.toLocaleDateString()); // give date
// console.log(typeof myDate);

// let createDate = new Date(2023, 0, 23); give created date.
// let createDate = new Date(2023, 0, 23, 5, 3); give date and time.
let createDate = new Date("2023-01-14"); //give the requirement date time.
// let createDate = new Date("01-14-2023"); // give the formating date.

let myTimeStamp = Date.now()

// console.log(myTimeStamp); 
// console.log(createDate.getTime()); 
// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// '${newDate.getDay()} and the time is:' // string interpolation.

newDate.toLocaleDateString('default', {
    weekday: "long",
});



