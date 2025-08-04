score = 400;
const balance = new Number (10000.60);
console.log(score);
console.log(balance);
console.log(balance.toString()); // converts to string 
console.log(balance.toFixed(2));

const otherBalance = 1139.465;
console.log(otherBalance.toPrecision(5));

const hundreds = 10000;
console.log (hundreds.toLocaleString('en-IN'));
console.log (Math.abs(-20)); //absolute value
console.log (Math.round(5.3));
console.log (Math.ceil(6.4));
console.log (Math.floor(7.9));
console.log (Math.max(20, 40, 50));
console.log (Math.min(20, 40, 10));
console.log (Math.randon()); //Generates a random number between 0 and 1.
console.log ((Math.random() * 10) + 1); 
const min = 10;
const max = 20;
console.log (Math.floor(Math.random()*(max-min+1)+min)); //Generates a random number between min and max, inclusive.