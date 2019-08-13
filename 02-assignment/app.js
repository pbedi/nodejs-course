const express = require('express');
const path = require('path');

const routes = require('./routes/routes');

const app = express();

app.use(routes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(3000);
