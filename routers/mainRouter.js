var express = require("express");
var router = express.Router();
var path = require("path");
// var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var config = require('../config');
var base58 = require('../utils/base58.js');

var Url = require('../models/url');

mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
    // server main page : index.html
    res.sendFile(path.join(__dirname, '../views/index.html'));
})


router.post('/api/shorten', function (req, res) {
    console.log(req.body)
    var longUrl = req.body.url;
    var shortUrl = config.webhost; // the shortened URL we will return
    
    Url.findOne({long_url: longUrl}, function (err, doc) {
        if (err) throw err;
        
        if(doc) {
            // then url is in db return base58 right away
            shortUrl += base58.encode(doc._id);
        } else {
            var newUrl = Url({
                long_url: longUrl
            });
            
            newUrl.save(function (err) {
                if(err) console.log(err);
                shortUrl = config.webhost + base58.encode(newUrl._id);

            })
            

            
        }
        
        res.send({'shortUrl': shortUrl});
        
    });
    
    
});

router.get('/:encoded_id', function(req, res){
  var base58Id = req.params.encoded_id;
  var id = base58.decode(base58Id);

  // check if url already exists in database
  Url.findOne({_id: id}, function (err, doc){
    if(err) console.log(err);
    if (doc) {
      // found an entry in the DB, redirect the user to their destination
      res.redirect(doc.long_url);
    } else {
      // nothing found, take 'em home
      res.redirect(config.webhost);
    }
  });
});


module.exports = router;