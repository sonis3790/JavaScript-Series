// Dates

 const myDate = new Date();
 //console.log(myDate.toUTCString())
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// const myNewDate = new Date(2024, 0, 3, 5, 23)
//const myNewDate = new Date("2024-05-21");
const myNewDate = new Date("12-3-2032")
//console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(myNewDate.getTime());  // mili second

//console.log(Date.now()/1000); // output in decimal

//console.log(Math.floor(Date.now()/1000)); // output in second
 
let newDate = new Date();
//console.log(newDate.getUTCHours());

newDate.toLocaleString("default", {
    weekday : "narrow",
});

console.log(newDate);