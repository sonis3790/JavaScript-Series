// for of

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const num of arr) {
//    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
//    console.log(greet);
}


// Maps

const map = new Map()   
map.set('IN', "India")
map.set('AFG', "Afghanistan")
map.set('ENG', "England")

// console.log(map);

for (const [key, value] of map) {
 //   console.log(key, ':-', value)
};

const myObj = {
    'game1' : "PUBG",
    'game2' : "Free fire"
}

// for (const [key, value] of myObj) {  // not working not iterable
//     console.log(key, ':-', value)
// }
