//Scopes in JS
let a = 300;
if (true){
    let a = 10;
    const b = 20;
    console.log ("Inneer: ", a)
}

console.log(a);