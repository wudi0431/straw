 var express = require('express');
var router = express.Router();
var fs = require('fs');
var util = require('util');
var _path='/Users/wudi/Downloads/work/straw//public/fonts';
var ff=null


router.get('/', function(req, res, next) {});

router.get('/loadFontlist', function(req, res, next) {
	var ff = fs.readdir(_path, function(err, files){
    //err 为错误 , files 文件名列表包含文件夹与文件
    if(err){
        console.log('error:\n' + err);
        return;
    }else{
    	ff=files;
    }

}); 

 console.log(ff);
  res.render('index', {fonts: ff});
}); 

module.exports = router;