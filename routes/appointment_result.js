var express = require('express');
var router = express.Router();
var connection = require('../db');


// connection.connect(function(err) {
//     if(err)  throw err;
//     console.log('connected');
// });

router.get('/',function (req,res,next){
    res.render('appointment_result'); // hbs
});


module.exports = router;