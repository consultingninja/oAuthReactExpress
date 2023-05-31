var express = require('express');
const path = require('path');
var router = express.Router();
router.get('/', (req, res) => {
  res.render('htmlAuth')
});

module.exports = router;
