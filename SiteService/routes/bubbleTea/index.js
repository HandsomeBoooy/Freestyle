var express = require('express');
var Login = require('../../business/bubbleTea/login');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('hello bubble tea');
});

router.get('/login', (req, res) => {
    res.send('')
});

module.exports = router;