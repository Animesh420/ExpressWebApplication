var express = require('express');
var router = express.Router();
var ejs = require('ejs');

router.get('/feedback',function(req,res){
 var feedbackData = require('../data/feedback.json');

res.render("feedback",{
  pageTitle:"feedback",
  pageID:"feedback",
  temp:feedbackData
});
});

router.post('/feedback',function(req,res){
  let theUser = req.body.user;
  var feedbackData = require('../data/feedback.json');
  feedbackData.push(theUser);
 
  let output= feedbackData.slice(-3);
    res.render("feedback",{
    pageTitle:"feedback",
    pageID:"feedback",
    temp:output
  });


});

module.exports = router;
