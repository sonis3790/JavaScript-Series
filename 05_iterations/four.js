const myObj = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    rb : "ruby"
}

for (const key in myObj) {
    // console.log(`${key} is ${myObj[key]}`);
}

const programming = ["js", "cpp", "py", "rb"]

for (const key in programming) {
   // console.log(`${key} is ${programming[key]}`)
};

const map = new Map()   
map.set('IN', "India")
map.set('AFG', "Afghanistan")
map.set('ENG', "England")

for (const key in map) {
    console.log(map);
}