var express = require("express");
var app = express();
var path = require("path");
var mainRouter = require("./routers/mainRouter.js");
app.use('/', mainRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function () {
    console.log('listening in port 8080...');
})

