//Objects
//Objects literals

const JsUser = {
    name: "Arpita",
    age:  21,
    location:'India',
    email: 'arpitaistic@gmail.com',
    isLoggedIn: true,
    lastLoggedInDays: ["Monday", "Tuesday", "Wednesday"],
}
console.log(JsUser.email);

//Creating Symbols in JS.
const mySym = Symbol("mykey1");
// If you want to add the symbol as a property to JsUser:
JsUser[mySym] = "mykey1";
//Object.freeze(JsUser); // This will prevent any changes to the JSUser Object.

JsUser.greeting = function(){
    console.log(`Hello, my name is ${this.name}`);
}
console.log(JsUser.greeting());