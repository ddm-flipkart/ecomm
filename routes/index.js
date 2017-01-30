const express = require('express');
const router = express.Router();
let EC = {
  is_signed_in: 'false',
  title: 'Lorem ipsum dolor',
  page_id: 'foo101',
  logo: 'https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  protocol: 'http',
  host: 'dotcodotin.com',
  origin: 'http://dotcodotin.com',
  pathname: '/',
  port: ''
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', EC);
});

module.exports = router;
