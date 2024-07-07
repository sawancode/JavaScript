// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(`the value of ${num}`);
}


const greetings = "Hello Words";
for (const greet of greetings) {
    // console.log(`Each characters is ${greet}`);
}

const greeting = "Hello Words";
for (const greet in greeting) {
    // console.log(`Each characters is ${greet}`);
}

/* Map:- The Map object holds key-value pairs and remembers
the original insertion order of the keys. Any value (both objects
 and primitive values) may be used as either a key or value.
*/

// ye unique value ko leta ha agar repeat krenge to signle value hi return krega.

const map = new Map()
map.set("IN", "India");
map.set("USA", "America");
map.set("Fr", "Franch");
map.set("Fr", "Franch");

// console.log(map);
 
for(const [key, value] of map){
    // console.log(key, ':-', value);
}

/*
const myObject = {
    game1: "BGMI",
    game2: "COD",
}
don't work because object par of loop work nhi krta ha.
for (const [key, value] of object) {
    console.log(key, ':-', value);
}
*/

