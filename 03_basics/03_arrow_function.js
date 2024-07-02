const user = {
    username: "sawan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current content ki property ko deta ha.
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // current cotext empty object aega.

// ************** arrow function *************

// function chai() {
//     let username =  "sawan";
//     console.log(this.username); // function me this ka use nhi kr skte hen sirf object me hi this ka use hota ha.
// }

// chai();

// const chai = function() {
//     let username = "rdx";
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "rdx";
//     console.log(this); // give {} empty object
//     console.log(this.username);
// }

// chai();

// explicate return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(10, 20));

// implicate return
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => (num1 + num2) // {} ka use kiya to return krna hoga || () ka use kiya to return nhi krna pdega.

const addTwo = (num1, num2) => ({username: "boy"});
// console.log(addTwo(2,3));

