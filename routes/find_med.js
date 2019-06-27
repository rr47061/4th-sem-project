var express = require('express');
var router = express.Router();
var connection = require('../db');

router.get('/', function(req, res, next) {
    var {mname} = req.body;
    console.log(mname);
    var sql = `select * from medicine where M_name = "${mname}"`;
    connection.query(sql,function(err,rows,fields){

        if(err) throw err;
        // res.json(rows);

        if (rows.length > 0) {


            if(rows[0].Available == '1') {
                console.log("yes");
                res.render('test', {result: 'available'});
            }
            else {
                console.log("no");
                // res.render('test', {result: 'not available'});
                res.render('test');

            }
        }else {   // if not found in database
            console.log("no");
            // res.render('test', {result: 'not available'});
            res.render('test');
        }

        //  res.render("test",rows[0])
        // res.render('editform',{title: 'Update product',product: rows[0]})
    })
})
module.exports = router;
