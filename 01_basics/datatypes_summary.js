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
    console.log("Heloo World");
};

console.log(typeof heroes);