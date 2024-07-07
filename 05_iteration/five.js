const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item)=> {
//     console.log(item);
// })

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        laguageName: "JavaScript",
        laguageFile: "js"
    },
    {
        laguageName: "Python",
        laguageFile: "py"
    },
    {
        laguageName: "Java",
        laguageFile: "Kava"
    }
]

myCoding.forEach((item)=> {
    console.log(item.laguageName);
})
