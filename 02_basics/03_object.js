/* singleton
Object.create
literal se object ko bnante hen to singleton nhi bnata ha.
constructor se object ko bnante hen to singleton bnta ha.
*/

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "sawan", // object me key and value pair me data store hota ha.
    "full name": "sawan solanki",
    [mySym]: "key1",
    age : 22, // key always is a string "" and value is changable data type.
    location: "indore",
    email: "sawan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

/* Thare are two ways to access the object 
a) . dot notation
b) [""] bracket notation
*/

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "rdxcode@gmail.com";
// console.log(jsUser);

// Object.freeze(jsUser); // freeze krne se object me koi update nhi hoga.
jsUser.age = 30;
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






