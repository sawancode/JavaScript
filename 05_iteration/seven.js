const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);

/*
const newNums2 = myNums.map( (num) => {
    return num + 20
})
 console.log(newNums2);
*/

// *****************************

/*
Q:- What is channing?
A:- Channing ka matalab hota ha ki perticular variable pr
map().map().filter().filter().reduce ye HOR method lga skte hen.
ise hi chaning khte hen.
*/

const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 50)
console.log(newNums);                