const express = require('express');
const path = require('path');

const rootDir = require('./utils/path');

const routes = require('./routes/routes');

const app = express();

app.use(routes);

app.use(express.static(path.join(__dirname,'public')));

app.use('/',(req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});

app.listen(3000);
