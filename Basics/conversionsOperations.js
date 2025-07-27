//let score = "30";
let score = null;
console.log(typeof score);
console.log (typeof(score));

let valueInNumber = Number(score);
console.log (typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
let isLoggedInBoolean = Boolean (isLoggedIn);
console.log (isLoggedInBoolean);
// 1 => true;
// 0 => false;
// "" => false;
// "Arpita" => true;
let someNumber = 33;
let someNumberString = String (someNumber);
console.log (someNumberString);
console.log (typeof someNumberString); //string


//OPERATIONS
let value = 3;
let negValue = -value;
console.log(negValue); //-3

let str1 = "Hello"
let str2 = " Arpita"
let str3 = str1 + str2; //concatenation
console.log(str3); //Hello Arpita

let gameCounter = 100;
gameCounter++; //increment
console.log (gameCounter); //101