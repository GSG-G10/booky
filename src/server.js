<<<<<<< HEAD
const express = require('express');

const app = express();
const pathFile = require('path');

const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {
    response.sendFile(pathFile.join(__dirname, '../', 'public', 'index.html'));
});

app.use(express.static(pathFile.join(__dirname, '../', 'public')));

=======
/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

>>>>>>> e492b90ba28305b5a4107b5471f09dae5623d53c
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});