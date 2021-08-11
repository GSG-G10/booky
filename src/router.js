const router = require('express').Router();
const { searchFetch, recommendeBooks } = require('./handler');

router.get('/search', (req, res) => {
  const param = req.query.q;
  searchFetch(res, param);
});
router.get('/recommend', (request, response) => {
  recommendeBooks(response);
});
module.exports = router;
