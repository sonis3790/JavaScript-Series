

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");               // sayMyName is reference And () this execution
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);   //        first rule
}

function addTwoNumbers(number1, number2){
//   let result = number1 + number2;
//   return result;            //      second rule and never work after than return  any key
    return number1 + number2;       // third rule
}

const result = addTwoNumbers(3,5)     // => (argunments)
// console.log("Result is",result);


// another way to value in parameters


function loginUserMessage(username) {           // username = "sam" this is a default value 
    if(username === undefined){                 // !username also use this
       console.log("Please enter your username");
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shourya"));
//console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){           // rest operators in function ...num1
    return num1
}

// console.log(calculateCartPrice(2, 894,903,2000));

const user = {
    username : "Shourya",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);

//handleObject({
    //username : "vikash",
    //price : 904
//})

const myNewArray = [100, 200, 800, 700]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray))