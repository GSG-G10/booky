const fetch = require('node-fetch');

const searchFetch = (book) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=search+${book}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.items[0].volumeInfo)
    .catch((err) => err.message);
};
module.exports = searchFetch;

const recommendeBooks = (response) => {
  fetch('https://www.googleapis.com/books/v1/volumes?q=bookshelves')
    .then((result) => result.json()).then((data) => {
      response.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { recommendeBooks,searchFetch };
