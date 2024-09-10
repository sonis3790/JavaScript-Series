const userEmail = []

// if(userEmail){
//     console.log("got user email")
// }else{
//     console.log("don't have user email");
// }

// falsy values

// false, 0 , -0, BigInt 0n, "", undefined, null, NaN

// Truthy values

// "false", "0", " ", [], {}, function(){}

// how to check array

// if(userEmail.length == 0){
//     console.log("array")
// }else{
//     console.log("not array")
// }


// how to check object

const emptyObj = {
    //name : "shourya"
}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}else{
    console.log("object is not empty")
}