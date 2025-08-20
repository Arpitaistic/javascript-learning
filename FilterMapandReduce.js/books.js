const books = [
    {
        title: 'Book One', genre: 'Fiction', publicationYear: 1987, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publicationYear: 1995, edition: 2010
    },
    {
        title: 'Book Three', genre: 'Fiction', publicationYear: 2001, edition: 2015
    },
    {
        title: 'Book Four', genre: 'Science Fiction', publicationYear: 2010, edition: 2020
    },
    {
        title: 'Book Five', genre: 'Fiction', publicationYear: 2018, edition: 2021
    }
];
let userBooks = books.filter ((bk) => bk.genre === 'Fiction')

userBooks = books.filter((bk) => { return bk.publish >= 2000})
console.log(userBooks);