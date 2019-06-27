var express = require('express');
var router = express.Router();
var connection = require('../db');


// connection.connect(function(err) {
//     if(err)  throw err;
//     console.log('connected');
// });

router.get('/',function (req,res,next){
    res.render('appointment');
});
router.post('/book',function(req,res,next)
{
    var {fname,lname,doctor,dtype,date,time,reg,email }= req.body;
    console.log("fname = " + fname +" lname : " + lname) ;
    var sql = `Insert into appointment (Fname,Lname,D_id,Speciality,Date,Timing,Email_id,Reg_no) values ("${fname}","${lname}","${doctor}","${dtype}","${date}","${time}","${reg}","${email}")`;
    //var sql = `Insert into appoint (Fname,Lname,D_id,Speciality,Date,Timing,Email_id,Reg_no) values ('2', 'jk', 'jkjkj', 'kj', 'kjk', '2019-04-02', 'jkj', 'kjk', 'kj')`;
    connection.query(sql,function(err,result){
        if(err) throw err;
        // alert("booking confirmed");
        res.redirect('/appointment_result');
    })
})


module.exports = router;