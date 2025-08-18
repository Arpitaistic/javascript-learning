const coding = ['JS', 'Python', 'Java', 'C++', 'Ruby'];
// ForEach with Arrays
coding.forEach(function (language){
 console.log(language);
});
// ForEach with Arrays using Arrow Function
coding.forEach((language) => {
 console.log(language);
});

function printMe (item){
    console.log(item);
}
//ForEach with Arrays using Named Function
coding.forEach(printMe);

// ForEach with Objects
const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : "JS",
    },
    {

    },
    {

    },
]
myCoding.ForEach ((item) => {
    console.log (item.languageName);
});