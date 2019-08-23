const express = require('express');


const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('form', {pageTitle: 'Add User', path:'/'});
  });

  router.post('/', (req, res, next) => {
    console.log(req.body);
    
    users.push({row: users.length+1, name: req.body.name});
    res.redirect('/users');
  });

  module.exports.forms = router;
  module.exports.users = users;