const name  = "Shourya";
const repoCount = 20;

console.log(name + repoCount);  // using concatenation (+) its an older version

// modern day developers use back tick (``)  => (string interpolation)

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}.`);

const newName = new String("shouryasoni");

// console.log(newName[1]);
// console.log(newName.__proto__);

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(5));
// console.log(newName.indexOf("o"));

const secondName = newName.substring(0, 5);
console.log(secondName);

const str = newName.slice(-9,4);  // using -ve value also
console.log(str);

const strOne = "     shiva     ";

console.log(strOne);
console.log(strOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "_"));

console.log(url.includes("shourya"));

const gameName = "shourya-soni-sons";
console.log(gameName.split('-'))

// console.log(gameName.bold());
// console.log(gameName.repeat());
// console.log(gameName.at(4));

