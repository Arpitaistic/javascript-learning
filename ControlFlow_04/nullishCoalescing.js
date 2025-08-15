//Nullish Coalescing Operator(??): null or undefined check
let val1;
//val1 = 5 ?? 10
//null=null ?? 10; // If val1 is null, it will take the value 10
val1 = undefined ?? 10; // If val1 is undefined, it will take the value 10
//sole.log(val1);

//Terniary Operator: (condition) ? valueIfTrue : valueIfFalse
const iceTeaPrice = 50;
iceTeaPrice < 50 ? console.log("Ice Tea is affordable") : console.log("Ice Tea is expensive");