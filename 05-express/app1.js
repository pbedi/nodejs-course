const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/add-product',(req, res, next) => {
    let content = '<form action="/product" method="POST">'
    content = content + '<input name="book_title" type="text">';
    content = content + '<button type="submit">Submit</button>';
    content = content + '</form>';
    res.send(content);
});


app.use('/',(req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});


app.listen(3000);
