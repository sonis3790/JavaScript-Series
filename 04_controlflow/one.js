 // if

//  const userLoggedIn = true;
//  const temperature = 41;

//  if (temperature < 50){
//     console.log("less than 50");
//  }else{
//    console.log("greater than 50");
//  }
 // comparision operators
 // < , > , <= , >= , == , !=, === , !==


 // scope related questions
    // block scope

//  const score = 200;
//  if (score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
//  }

//  console.log(`user power : ${power}`);

// short hand notation      
 // implicit scope      
//const balance = 900;

// if (balance > 500) console.log("test");

// if  (balance < 500){
//     console.log("less  than 500"); 
// }else if(balance < 750){                 // nesting
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 1000");
// }

    
const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false;
const loggedInEmail = true;

// if(userLoggedIn && debitCard){
//     console.log("allow to buy courses");
// }

if(loggedInGoogle || loggedInEmail){
 //   console.log("allow to login")
}

// ++++ Nullish coalsecing operator (??) null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 13
val1 = null ?? 10 ?? 12
// console.log(val1);


// +++++ terniary operator +++++ // 

// condition ? true : false

const icePrice = 500
icePrice <= 150 ? console.log("less than 150"):console.log("greater than 150")

