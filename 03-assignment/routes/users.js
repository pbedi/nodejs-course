const express = require('express');


const router = express.Router();

const formdata = require('./form');

router.get('/users', (req, res, next) => {
  const userList = formdata.users;
  console.log(userList);
  
    res.render('users', {pageTitle: 'List Users', path: '/users', users: userList});
  });

  module.exports = router;