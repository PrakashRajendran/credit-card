var express = require('express');
var router = express.Router();

/* redirect to welcome page if root url */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET index page */
router.get('/index', function(req, res, next) {
  res.render('index');
});

module.exports = router;
