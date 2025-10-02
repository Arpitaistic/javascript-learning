console.log("Welcome to DOM Tutorial");
console.dir(window.document.body);
console.log(document.body);
console.log(document.body.childNodes[1])
document.body.style.background ="yellow"
document.body.childNodes[3].innerText = "abcd";
//Accessing Elements
//Access Elements by ID
const heading = document.getElementById("heading"); //h1
console.log(heading);
//Access Elements by Class Name
const headings = document.getElementsByClassName("heading-class");
console.log(headings);
//Access Elements by Tag Name
const parahs = document.getElementsByTagName("p");
console.log(parahs);
//Access Elements by Query Selector: Can select ID/CLASS/TAG-Returns first match
const elements = document.querySelector("p");
console.log (elements);
//Access Elements by Query Selector All: Can select ID/CLASS/TAG-Returns all matches
const elems = document.querySelectorAll("p");
console.log(elems);

