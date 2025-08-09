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
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
