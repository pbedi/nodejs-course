const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/users',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
});

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
});

router.use('/',(req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});

module.exports = router;