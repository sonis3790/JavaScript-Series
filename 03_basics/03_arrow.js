const user = {
    username : "shourya",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }
}
//user.welcomeMessage()
// user.welcomeMessage();
// user.username = "shivam";
// user.welcomeMessage(); 

 //console.log(this);    //for outside node => {} for this but browser output window object

// function chai(){
//     let username = "shourya"
//     console.log(this.username); //for inside node => global,object and so more
// }

// chai();

// +++++++++++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++ //

// const chai = function (){
//         let username = "shourya"
//        console.log(this.username); 
// }

// chai();

const code = () => {
    let username = "shivam"
    console.log(this);
}
// code()

            //  Basic arrow function (explicit return)
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
        // implicit return
    
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username : "shiva"});

console.log(addTwo(3, 90));


    
