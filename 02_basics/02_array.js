const marvelHeroes = ["thor", "hulk", "spiderman"];
const dcHeroes = ["batman", "superman", "flash"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][0]);

const allHeroes = marvelHeroes.concat(dcHeroes);  // limited
// console.log(allHeroes);

const all_newHeroes = [...marvelHeroes, ...dcHeroes] // unlimited (two or more than two)
// console.log(all_newHeroes);

const allArray = [1,2,3,4,5,[7,3,5,6,[4,10,34,[4,0,56]]]];
//const realArray = allArray.flat(Infinity);

// console.log(realArray);

console.log(Array.isArray("shourya"));
console.log(Array.from("shourya"));
console.log(Array.from({name : "shivam"}));  // interseting case

let score1 = 100;
let score2 = 400;
let score3 = 500;
let score4 = 900;

console.log(Array.of(score1,score2,score3));