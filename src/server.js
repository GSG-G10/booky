const express = require('express');
const pathFile = require('path');
const route = require('./router');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(route);
app.use(express.static(pathFile.join(__dirname, '../', 'public')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${PORT}`);
});
