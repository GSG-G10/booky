const fetch = require('node-fetch');

let recommendeBooks;

recommendeBooks = (response) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=bookshelves')
        .then((result) => result.json()).then((data) => {
            response.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = recommendeBooks;