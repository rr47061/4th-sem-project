var express = require('express');
var router = express.Router();
var connection = require('../db');
// for single page connection
// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodeapp',
//
// });

connection.connect(function(err) {
    if(err)  throw err;
     console.log('connected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    var query = 'select * from products';

    connection.query(query, function (err, rows, fields)
    {
        if(err) throw err;
        //res.json(rows);

        //res.render('products', { title: 'products',products: rows[0] }); for single row
        res.render('products', { title: 'products',products: rows }); // hbs file
    });
});

router.get('/create-form',function (req,res,next){
res.render('createform',{title: 'create product'});
});

router.post('/create' , function (req,res,next){
    var id = req.body.id;
    var name = req.body.name;
    var sql = `Insert into products (id,name) values ("${id}","${name}")`;
    connection.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/products');
    })
})

router.get('/edit-form/:id',function(req,res,next)
{
    var id = req.params.id;
    var sql = `select * from products where id = ${id}`;
    connection.query(sql,function(err,rows,fields){
        res.render('editform',{title: 'Update product',product: rows[0]})
    })
})

router.post('/edit/:id' , function (req,res,next){
    var id = req.params.id;
    var name = req.body.name;
    var sql = `update products set name= "${name}" where id = "${id}"`;
    connection.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/products');
    })
})
router.get('/delete/:id',function(req,res,next){
    var id = req.params.id;
    var sql = `delete from products where id=${id}`;
    connection.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/products');
    })
})
module.exports = router;
