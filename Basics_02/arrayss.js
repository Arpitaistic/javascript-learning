//array
const arr = [1, 2, 3, 4, 5];
const myHeroes = ["Dhoni", "Virat", "Rohit"];
const myArr = new Array (1, 2, 3, 4,5);

console.log(myHeroes[1]);
//Array Methods
console.log(myHeroes.length);
myArr.push(6); //adds an element at the end
console.log(myArr);
myArr.pop(); //removes the last element
console.log(myArr);
myArr.unshift(0); //adds an element at the beginning
console.log(myArr);
myArr.shift(); //removes the first element
console.log(myArr);
console.log(myArr.includes(8)); //checks if an element is present
console.log(myArr.indexOf(4)); //returns the index of the element
const newArr = myArr.join
console.log (newArr); //joins the array elements into a string

//Slice and Splice in JS
const mySlice = myArr.slice(1, 4); //returns a shallow copy of a portion of an array
console.log(mySlice);
const mySplice = myArr.splice(1, 2, 10, 20); //changes the contents of an array by removing or replacing existing elements and /or adding new elements