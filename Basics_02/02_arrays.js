const vampireHeroes = ["Damon", "Stefan", "Elena", "Caroline", "Enzo"];
const OriginalHeroes = ["klaus", "Elijah", "Rebekah", "Hayley"];
const allHeroes = vampireHeroes.concat(OriginalHeroes);
console.log(allHeroes);
const allNewHeroes = [...vampireHeroes,...OriginalHeroes];
console.log(allNewHeroes);

const anotherArr = [1,2,[2,3],4,5,[6,7]];
const realAnotherArr = anotherArr.flat(Infinity);

console.log(Array.isArray ("Klaus"));
console.log(Array.from("klaus"));
console.log(Array.from({name: "Arpita"})); //Interesting, but not an array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log([score1, score2, score3]); //Array of scores