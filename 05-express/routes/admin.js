const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('../helper/path');

const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

module.exports = router;