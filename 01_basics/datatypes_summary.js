// Primitive datatypes

    // 7 Types :- String, Bollean, Number, Null, Undefined, Symbol, BigInt
    
const hell = "str" // string

const score = 100
const scoreValue = 100.3  // Number

const isLoggedIn = false // boolean
const outsideTemp = null // null

let putValue; // undefined

const id = Symbol('123');
const anotherId = Symbol(123);

// console.log(id === anotherId);  // symbols

const bigNumber = 472895296026580n // BigInt
// Non-Primitive datatypes(Reference)

    // Array, Objects, Functions

const heroes = ['nagarjun' , 'vijay' , 'selmon'] ;

let myObj = {
    name : "Shourya",
    age : 12,
}

const myfunction = function(){
  //  console.log("Heloo World");
};

 // console.log(typeof heroes);


 // ++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(Primitive) => values are copy , Heap(Non-Primitive) => Values are reference

 let youtubeName = "Shourya Soni"
 let anotherName = youtubeName;
 anotherName = "apna college"

 console.log(youtubeName);
 console.log(anotherName);

 let userOne = {
    email : "sonis8934@gmail.com",
    upi : "user@ybl"
 }

 let userTwo = userOne;
 userTwo.email = "uefhi@gmail.com"

 console.log(userTwo); 
 console.log(userOne);

 

