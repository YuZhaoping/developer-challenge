var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
  res.json({'message': 'TODO'});
});

module.exports = router;
