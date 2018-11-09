var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '118.24.181.127',
    user     : 'root',
    password : '12345',
    database : 'crawler'
});
connection.connect();
router.get('/',function (req,res) {

    connection.query('select * from job_info ', function (error, results, fields) {
        if (error){
            return console.log(error)
        }
        console.log(results);
        res.send(results)
        //如果关闭连接会有问题
        //connection.end();
    });

})

module.exports=router
