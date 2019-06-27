var express = require('express');
var router = express.Router();
var connection = require('../db');
// var popupS = require('popups');
// var JSAlert = require("js-alert");
// const flash = require('express-flash-notification');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// import alert from 'alert-node';
// var alert = require( 'alert-node');

// connection.connect(function(err) {
//     if(err)  throw err;
//     console.log('connected');
// });


//default of medicine
/* GET medinicine listing. */
router.get('/', function(req, res, next) {
    var query = 'select * from medicine';

    connection.query(query, function (err, rows, fields)
    {
        if(err) throw err;
        // res.json(rows);

        // res.render('products', { title: 'products',products: rows[0] });
        res.render('medi');
    });
});

router.post('/find_med',function(req,res,next)
{
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
               // res.render('test');
               // req.flash('info', 'invalid username or password');
               // JSAlert.alert("This is an alert.");

           }
           else {
               console.log("no");
               // JSAlert.alert("This is an alert.");
               // req.flash('info', 'invalid username or password');
               res.render('test', {result: 'not available'});
               // res.render('test');

           }
        }else {   // if not found in database
           console.log("no");
           res.render('test', {result: 'not available'});
           // res.render('test');
       }

     //  res.render("test",rows[0])
       // res.render('editform',{title: 'Update product',product: rows[0]})
    })
})


module.exports = router;
