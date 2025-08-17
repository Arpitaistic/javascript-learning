//for of
//[{}, {}, {}]

//Objects
const arr = [1, 2, 3, 4, 5];
for (const element of arr){
    console.log(`Element: ${element}`);
}
//Strings
const greeting = "Hello, there!";
for ( const greet of greeting){
    console.log (`Each character: ${greet}`);
}

//Maps
const myMap = new Map()
myMap.set('IN', 'India');
myMap.set('US', 'United States');
myMap.set('UK', 'United Kingdom');
console.log(myMap);
//For of with Maps
for (const [key, value] of myMap){
    console.log(`Key: ${key}, Value: ${value}`);
}
//For of with Objects
const myObject = {
  'game1': 'NFS',
  'game2': 'F1',    
}
for (const [key, value] of Object.entries(myObject)){
    console.log(`Key: ${key}, Value: ${value}`);
}