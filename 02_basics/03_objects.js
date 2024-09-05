// singleton
// object.create => using constructor process

// object literals

const mySym = Symbol("key1");

const userName = {
    name  : "shourya",
    "full name" : "shourya soni",
    [mySym] : "myKey1",
    roll_no : 123,
    location : "jaipur",
    email : "sk23@gmail.com",
    isLoggedIn : false,
    lastLoggedDays : ["monday" , "friday"]
}

// console.log(userName.email);
// console.log(userName["email"]);
// console.log(userName["full name"]);
// console.log(userName[mySym]);    // interview questions

userName.email = "sgh84@email.com";
// Object.freeze(userName);
userName.email = "hds12@yahoo.in";
// console.log(userName);

userName.greeting = function(){
    console.log("hello JS user");
}

userName.greetingTwo = function(){
    console.log(`hello JS user ${this["full name"]}`);
}

console.log(userName.greeting());
console.log(userName.greetingTwo());
