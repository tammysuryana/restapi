var connection = require ('../koneksi');
var mysql = require ('mysql');
var md5 = require('md5');
var response = require ('../rest' );
var jwt = require('jesonwebtoken');
var config = require('../config/secret');
var ip = require ('ip');


//controler untuk register
exports.register = function(req,res){
    var post ={
        username : req.body.username,
        email : req.body.email,
        password : md5(req.body.password),
        role : req.body.role,
        tanggal_daftar : new Date()
    }

    //untuk mengecek yang terdaftar email 
    var query = "SELECT email FROM ?? WHERE?? ";
    var table = ('user', 'email', post.email);

    query = mysql.format(query.table);
    connection.query(query, function(error,row){
        if (error){
            console.log(error);
        }else{
            if (row.length == 0){
                var query ="INSERT INTO ?? SET ?";
                var table =['user'];
                query = mysql.format(query.table);
                connection.query(query, post , function(error,row){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("email sudah terdaftar..!!")
                    }
                })
            }
        }
    })
}

