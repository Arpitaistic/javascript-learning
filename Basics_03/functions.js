function sayMyName(){
    console.log('A');
    console.log('R');
    console.log('p');
    console.log('I');
    console.log('T');
    console.log('A');
}
//sayMyName();

//To Add Two Numbers
/*function addTwoNumbers( number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 6);*/

function addTwoNumbers (number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumbers(5,8);
//console.log("Your Result is: ",result);

function loginUserMessage (username = "Klaus"){
    if(username === undefined){
        //console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400));
const user = {
    username : "Arpita",
    price: "200"

}

function handleObject(anyobject){
//console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username: "Arpita",
    price: 399,
})

const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));