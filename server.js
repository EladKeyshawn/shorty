var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var config = require("./config.js");

var mainRouter = require("./routers/mainRouter.js");

app.use(express.static(path.join(__dirname, 'public')));

// handles JSON bodies
app.use(bodyParser.json());
// handles URL encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use('/', mainRouter);


app.listen(8080, function() {
    console.log('listening in port 8080...');
});
