const express = require('express')
const router = express.Router();
const pathFile = require('path');
const { searchFetch, recommendeBooks } = require('./handler');

router.get('/search', (req, res) => {
  const param = req.query.q;
  searchFetch(res, param);
});
router.get('/recommend', (request, response) => {
  recommendeBooks(response);
});
router.use(express.static(pathFile.join(__dirname, '../', 'public')));
module.exports = router;
