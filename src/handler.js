const fetch = require('node-fetch');

let recommendeBooks;

recommendeBooks = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=bookshelves')
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
        });
};

module.exports = recommendeBooks;