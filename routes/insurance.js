var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

        //res.render('products', { title: 'products',products: rows[0] }); for single row
        res.render('insurance', { title: 'insurance Facility'}); // hbs file
    });
    // res.render('doctor_page');


module.exports = router;
