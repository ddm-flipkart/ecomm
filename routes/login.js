var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
    is_signed_in: 'false',
    title: 'Echo Chamber',
    page_id: 'foo101',
    logo: 'https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  });
});

module.exports = router;
