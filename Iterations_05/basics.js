//FOR Loops
for (let index =1; index <= 10; index++){
    const element = index;
    if (element % 2 === 0){
        console.log ("Even number: " + element);
        }
    console.log(element)
}

//Nested FOR Loops
for (let i =1; i<=10; i++){
    console.log(`Outer Loop iteration:  + ${i}`);
    for (let j = 1; j<=10; j++){
   //console.log(`Inner Loop iteration: ${j}`);
   console.log(`Multiplication: ${i} * ${j} = ${i * j}`);
    }
}

//Array
let myArray = ['Virat', 'Rohit', 'MSD', 'Sachiin'];
for (let index = 0; index < myArray.length; index++){
    const element = myArray [index];
    console.log(`Player: ${element}`);
}

//Break and Continue
//Break
for (let i = 1; i<= 10; i++){
    if (i === 5){
        console.log ("5 is detected")
        break; // Exits the loop when i is 5
    }
    console.log(`Value of i is: ${i}`);
}

//Continue
for (let i = 1; i<= 10; i++){
    if (i === 5){
        console.log ("5 is detected")
        continue; // Skips the rest of the loop iteration when i is 5
    }
    console.log(`Value of i is: ${i}`);
}
