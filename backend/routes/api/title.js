var router = require('express').Router();
var mongoose = require('mongoose');
var Title = mongoose.model('Title');

// return a list of tags
router.get('/', function(req, res, next) {
  Title.find().contains('Title').then(function(title){
    return res.json({title: title});
  }).catch(next);
});

module.exports = router;
