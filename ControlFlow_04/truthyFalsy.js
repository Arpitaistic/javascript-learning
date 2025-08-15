const userEmail = []
if (userEmail){
    console.log("Got User Email")
} else{
    console.log ("No User Email")
}

//FALSY VALUES
// Falsy values in JavaScript include: false, 0, "", null, undefined, NaN, -0, BigInt(0), Empty String

//TRUTHY VALUES
// Truthy values in JavaScript include: true, any non-zero number, non-empty strings, objects, arrays, functions, etc. "0", 'false'

// (userEmail.length ===0){
   //nsole.log(" Array is Empty");
//

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}