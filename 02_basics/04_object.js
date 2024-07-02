//using constructor and singleton

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
           firstname: "sawan",
           lastname: "solanki", 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj4 = {
    5: "e",
    6: "f",
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "rdx@gmail.com"
    },
    {
        id: 1,
        email: "rdx@gmail.com"
    },
    {
        id: 1,
        email: "rdx@gmail.com"
    },
    {
        id: 1,
        email: "rdx@gmail.com"
    },
    {
        id: 1,
        email: "rdx@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // give only key
// console.log(Object.values(tinderUser)); // give only value
// console.log(Object.entries(tinderUser)); // give key and values both

// console.log(tinderUser.hasOwnProperty('isLogged')); // available or not


//****************************** de-structure *************************************

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

const {courseInstructor: instructor} = course; // de-structure
// console.log(instructor); 

//********************* API *************************

// {
//     "name": "sawan",
//     "coursename": "js",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]