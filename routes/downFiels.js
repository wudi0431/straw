 var express = require('express');
var router = express.Router();
var fs = require('fs'); 
var zip = require("node-native-zip"); 
var path = require('path');

router.get('/', function(req, res, next) {
   
   var _fontname =req.query.fontname;

   var fontspath = path.resolve(__dirname, '../public/temp/'+_fontname+'/'+_fontname+'');

   var demopath = path.resolve(__dirname, '../views/');
    
   var archive = new zip(); 
	 
	archive.addFiles([ 
		{ name:"demo.html", path:demopath+'/demo.html'},  
	    { name:"webfont.eot", path: fontspath+".eot" }, 
	    { name:"webfont.svg", path: fontspath+".svg" }, 
	    { name:"webfont.ttf", path: fontspath+".ttf" }, 
	    { name:"webfont.woff", path: fontspath+".woff" }
	], function (err) { 
	    if (err) return console.log("err while adding files", err); 
	 
	    var buff = archive.toBuffer(); 
	 
	    fs.writeFile(fontspath+"webfont.zip", buff, function () { 
	        console.log("Finished");   
	        res.download(fontspath+".zip");
	    }); 
	}); 

}); 

module.exports = router;