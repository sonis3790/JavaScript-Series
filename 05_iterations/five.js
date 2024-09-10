const coding = ["js", "rb", "py", "c++"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, coding) => {
//     console.log(item, index, coding)
// })


const myCoding = [
    {
        languageName : "javascript",
        llaguageFileName : "js",
    },
    {
        languageName : "python",
        llaguageFileName : "py",
    },
    {
        languageName : "java",
        llaguageFileName : "java",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})