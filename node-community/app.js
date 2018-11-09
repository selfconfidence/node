var express = require('express')
var path = require('path')
var fs = require('fs')


var route = require('./mysql-connection');
var require1 = require('./routes/mongoosse-collection');

var app = express();
app.engine('html',require('express-art-template'))
app.use('/public/', express.static(path.join(__dirname, '/public/')))
app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')))

app.use(route)
app.use(require1)
app.listen(3000, function (err) {
    if (err) {
        return console.log('启动失败')
    }
    console.log('启动success')
})