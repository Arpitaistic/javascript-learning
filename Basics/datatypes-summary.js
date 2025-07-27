// In JS, datatypes are of 2 types: primitives and objects
// Primitives: number, string, boolean, null, undefined, symbol, BigInt
const score = 100;
const scoreValue = 100.5;

const isLoggedIn = true;
const outsideTemperature = null; // no value
let userEmail; // undefined, variable declared but not assigned a value

//const id = symbol('123');
//const anotherId = symbol('123');
//console.log (id === anotherId);

const bigIntValue = 832483847129302742984e7298417824819247;

//References: Non Primitive data types
// Objects, Arrays, Functions
//Arrays
const cricketers = ["Virat", "Rohit","Dhoni"];

//Objects
let userDetails = {
    name: "Arpita",
    age: 22,
    isLoggedIn: true,
    state: null,
} 

//Functions
const myFuntion = function(){
    console.log("Hello Arpita");
}