//String concatination
const firstName = "Arpita";
const repoCount = 25;
console.log (firstName + " has"+ " " + repoCount + " "+ "repositories.");
//String interpolation
console.log (`Hello My name is ${firstName} and I have ${repoCount} repositories.`)
const newGame = new String (`ViratGame`);
console.log (newGame[0]); //V
console.log (newGame.__proto__); //string prototype
console.log (newGame.length);
console.log (newGame.toUpperCase()); 
console.log (newGame. charAt(3));
console.log (newGame.indexOf("a"));
const newString = newGame.substring(0, 3);
console.log (newString);
const anotherString = newGame.slice(-9, -1);
console.log (anotherString);
const newStringOne = "    Arpita   ";
console.log (newStringOne.trim()); // removes whitespace from both ends 
const url = "https: //www.google.com";
console.log (url.replace("https", "http")); 
console.log (url.includes("google"));