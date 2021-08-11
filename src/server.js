const express = require('express');
const pathFile = require('path');
const { searchFetch, recommendeBooks } = require('./handler');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {
    response.sendFile(pathFile.join(__dirname, '../', 'public', 'index.html'));
});
app.get('/search', (req, res) => {
    const param = req.query.q;
    searchFetch(res, param);
});
app.get('/recommend', (request, response) => {
    // eslint-disable-next-line no-undef
    recommendeBooks(response);
});

app.use(express.static(pathFile.join(__dirname, '../', 'public')));

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${PORT}`);
});