const express = require('express');
const recommendeBooks = require('./handler')

const app = express();
const pathFile = require('path');

const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {
    response.sendFile(pathFile.join(__dirname, '../', 'public', 'index.html'));
});
app.get('/recommend', (request, response) => {
    response.end(recommendeBooks());
});

app.use(express.static(pathFile.join(__dirname, '../', 'public')));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});