function sayMyName() {
    // console.log("sawan");
}
// sayMyName();

function addTwoNumbers(number1, number2) { // parameter 
    // console.log(number1+number2);
}

// const result = addTwoNumbers(10,20) // argument
// console.log("Result:"+ result);

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    // console.log("Sawan");
    return result; // return ke bad me kuch bhi task perform nhi hoga.
    console.log(solanki);
}

const result = addTwoNumbers(10, 20);

// console.log("Result: "+ result);

function loginUserMessage(username="sam") {
    if(!username || username === undefined){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in...`
}

loginUserMessage("sawan"); // yhan pr just call kiya ha to return value console nhi hongi.
// console.log(loginUserMessage("sawan")); // yhan value ko console kiya ha.
// console.log(loginUserMessage("sammi")); // koi value nhi di ha to undefined aega.


//************************************************************

//...variable this is the rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1;
} 

// console.log(calculateCartPrice(2,4,5,6))

const user = {
    username: "sawan",
    price: 999,
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username: "sawan",
    price: 2000,
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[0];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([5, 400, 500, 1000]));
