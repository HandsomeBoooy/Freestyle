var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Welcome to Xing Liu's Homepage." });
});

router.get('/resume', (req, res, next) => {
    res.render('resume');
});

module.exports = router;