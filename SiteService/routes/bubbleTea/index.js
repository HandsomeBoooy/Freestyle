var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('hello bubble tea');
})

module.exports = router;