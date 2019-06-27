var express = require('express');
var router = express.Router();
var connection = require('../db');




router.get('/',function (req,res,next){
    res.render('appointment_by_doc');
});
router.get('/:D_id',function (req,res,next){
    var id = req.params.D_id;
    var sql = `select * from doctor where D_id = ${id}`;
  connection.query(sql,function(err,rows,fields){
    if(err) throw err;
    else
        res.render('appointment_by_doc',{title: 'Doc by Id',doctor: rows[0]})
    })

});
router.post('/book',function(req,res,next)
{
    var {fname,lname,doctor,dtype,date,time,reg,email }= req.body;
    console.log("fname = " + fname +" lname : " + lname + "doctor :  " + doctor + "dtype: " + dtype + "date : " + date + "time : " +
    time + "reg : " + reg + "email: "+ email) ;
    var sql = `Insert into appointment (Fname,Lname,D_id,Speciality,Date,Timing,Email_id,Reg_no) values ("${fname}","${lname}","${doctor}","${dtype}","${date}","${time}","${reg}","${email}")`;
   // var sql = `Insert into appointment (Fname,Lname,D_id,Speciality,Date,Timing,Email_id,Reg_no) values ('jk', 'jkjkj', 'kj', 'kjk', '2019-04-02', 'jkj', 'kjk', 'kj')`;
    connection.query(sql,function(err,result){
        if(err) throw err;
        // alert("booking confirmed");
        console.log("data inserted ");
        res.redirect('/appointment_result');
    })
    });
module.exports = router;