var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');


var mainRouter = require("./routers/mainRouter.js");
app.use('/', mainRouter);

app.use(express.static(path.join(__dirname, 'public')));

// handles JSON bodies
app.use(bodyParser.json());
// handles URL encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () {
    console.log('listening in port 8080...');
})

