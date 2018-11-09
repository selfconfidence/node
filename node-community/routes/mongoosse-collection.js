var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.238.157/node');
mongoose.Promise = global.Promise;
var Cat = mongoose.model('Cat', { name: String })
router.get('/get',function (req,res) {
 //以查询为例子
    Cat.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
        res.send(kittens)
    })
})



module.exports=router