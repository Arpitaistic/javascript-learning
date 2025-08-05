//Dates in JavaScript
let myDate = new Date(); // Current date and time
console.log (myDate);
console.log (myDate.toString()); //Converts to string
console.log (myDate.toDateString()); //Converts to date string
console.log (myDate.toLocaleString()); //Converts to locale string
console.log (typeof myDate);
let myCreatedDate = new Date( 2023, 9, 15);
console.log(myCreatedDate);
console.log (myCreatedDate.toString());

//Timestamps in JavaScript
let myTimestamp = Date.now();
console.log (myTimestamp);
console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log (newDate);
console.log (newDate.getMonth());
newDate.toLocaleString(`default`, {
    
})
