// Immediately Invoked Function Expression (IIFE)
(function coffee (){
    //named IIFE
    console.log(`DB connected!`)
}());

(()=>{
    console.log(`DB CONNECTED!`);
})();

((name) =>{
    console.log(`DB connected to ${name}`);
}) (`Arpita`)