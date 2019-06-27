var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET home page. */
// router.get('/', function(req, res, next) {
//
//     res.render('doctor_page');
// });
router.get('/', function(req, res, next) {
    var query = 'select * from doctor';

    connection.query(query, function (err, rows, fields)
    {
        if(err) throw err;
        //res.json(rows);
        console.log(rows);
        //res.render('products', { title: 'products',products: rows[0] }); for single row
        res.render('doctor_page', { title: 'doctor',doctor: rows }); // hbs file
    });
    // res.render('doctor_page');
});

module.exports = router;
