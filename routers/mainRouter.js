var express = require("express");
var router = express.Router();
var path = require("path");
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
    // server main page : index.html
    res.sendFile(path.join(__dirname, '../views/index.html'));
})


router.get('/api/shorten', function (req, res) {
    
})

module.exports = router;