const myNums = [1, 2, 3];
const myTotal = myNums.reduce ((accumulator, currentValue) =>{
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0)
console.log (`Total: ${myTotal}`);

//Example 2
const shoppingCart = [
    {
        item: 'Apple', price: 10, quantity: 2
    },
    {
        item: 'Banana', price: 5, quantity: 5
    },
    {
        item: 'Orange', price: 8, quantity: 3
    }
]
const priceToPay = shoppingCart.reduce((accumulator, item)=>accumulator + item.price, 0);
console.log(`Total Price to Pay: ${priceToPay}`);