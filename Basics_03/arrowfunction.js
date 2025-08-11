const user = {
    userName : "Elena",
    price: 999,
    welcomeMessage: function (){
        //console.log(`${this.userName}, welcome to the website!`);
        //console.log(this)
    }
    
  
}
//user.welcomeMessage()
//user.username = "Katherine";
//console.log(this);

function coffee (){
   // let userName = "Cappuccino"
   // console.log(this.userName)
}
//coffee() //"THIS doesn't work with functions!"

//ARROW FUNCTIONS
const coffeee = () =>{
    let userName = "cappuccino"
    console.log(this)
}
//coffeee()

//PURE ARROW Functions
//Basic Arrow Function
//const addTwo = (num1, num2)=> {
   //return num1 + num2;
//}
//console.log(addTwo (4, 5));

//IMPLICIT RETURN = Doesn't have to use return keyword
//const addTwo = (num1, num2)=> num1 + num2;
//console.log(addTwo (4, 5))
//const addTwo = (num1, num2)=> (num1 + num2);
//console.log(addTwo (4, 5))

const addTwo = (num1, num2)=> {username: "Arpita"};
console.log(addTwo (4, 5))

const myArray = [2, 3, 4, 5]
myArray.forEach(() => {})