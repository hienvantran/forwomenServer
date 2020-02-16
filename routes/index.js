var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/aboutus.html'));
});

module.exports = router;
