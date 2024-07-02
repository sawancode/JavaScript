// var c = 300; // global scope
let a = 300;

if(true){
    let a = 10;
    const b = 20; // block scope
    // console.log("INNER: "+ a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "sawan";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // showing error because of the scope.

    two();
}

// one();

if(true) {
    const username = "sawan";
    if(username === "sawan"){
        const website = " solanki";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//******************* intersting *******************************//

// console.log(addone(5)); // this is the function that's why this is give output.
function addone(num) {
    return num + 1;
}



// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization (this is the expresion we can hold a ref another variable that why appear a hoisting concept.)
const addTwo = function(num) { //expression
    return num + 2;
}
