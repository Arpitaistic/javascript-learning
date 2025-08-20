const myNums = [1, 2, 3];
const myTotal = myNums.reduce ((accumulator, currentValue) =>{
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0)
console.log (`Total: ${myTotal}`);