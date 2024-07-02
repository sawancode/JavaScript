// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE 
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // without named IIFE
    console.log(`DB CONNECTED TO ${name}`);
})("sawan"); // explicitly semicolon : ko lgana hoga.

/* Global scope ke polution se problem hoti ha kai bar us 
global scope ke polution ya declration ko htane ke lie 
IIFE ka use krte hen.
*/
// another demo to practice it...
((surname)=>{
    //without named IIFE
    console.log(`the surname is ${surname}`);
})("solanki")