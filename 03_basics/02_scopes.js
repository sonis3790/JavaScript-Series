//  var c = 3000;

let a = 100;

if(true){
    let a = 10;
    const b = 20;               // Block Scope
    console.log("inner : ", a)
    var c = 30;

}

  //console.log(a);
 //console.log(a);
// console.log(b);
// console.log(c);


    // Nested scopes

function one() {
    const username = "shourya";
    function two() {
        const website = "youtube";
        console.log(username);
    }
     // console.log(website);

    two()
}   

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
      //  console.log(username + website);
    }
 //   console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++  interesting  ++++++++++++++++++++++++++++ // 
// console.log(addone(6))
function addone (num){
    return num + 1
}

//addTwo(5)           // referenceerror: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
