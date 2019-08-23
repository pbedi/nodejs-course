const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const formData = require('./routes/form');
const usersData = require('./routes/users');

app.use(usersData);
app.use(formData.forms);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'});
});
app.listen(3000);