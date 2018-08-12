var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Welcome to Xing Liu's Homepage." });
});

router.get('/resume', (req, res, next) => {
    res.render('resume');
});

router.get('/addTestInfo', (req, res, next) => {
    /**
     * Get方法 req.query(Get方法也可以将请求的参数放在body中，但是通常会放在url中，因此通过req.query属性获取)
     * Post方法 req.body
     */
    console.log(req.query, req.body);
    res.send('addTestInfor entering...');
})

module.exports = router;