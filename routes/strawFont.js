var express = require('express');
var router = express.Router();
var Fontmin = require('fontmin');
var path = require('path');
var os = require('os');




/* GET home page. */
router.get('/', function(req, res, next) {});

router.post('/', function(req, res, next) {
    var srcPath = path.resolve(__dirname, '../public/fonts/SentyPaperCut.ttf');
    var destPath = path.resolve(__dirname, '../public/temp/');



    var text = req.body.text;
    var fontmin = new Fontmin()
        .src(srcPath);
    fontmin.use(Fontmin.glyph({
        text: text
    })).use(Fontmin.ttf2eot({
        clone: true
    })).use(Fontmin.ttf2woff({
        clone: true
    })).use(Fontmin.ttf2svg({
        clone: true
    })).dest(destPath);

    fontmin.run(function(err, files, stream) {

        if (err) {
            console.log(err);
            process.exit(-1);
        }

        var paths = [];
        files.forEach(function(file) {
            paths.push('/' + file.path.split('/public/')[1]);
        });

        var data = {
            text: text,
            paths: paths
        };

        res.render('fontShow', data);
    });


});

module.exports = router;