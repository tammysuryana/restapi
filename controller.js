'use strict';
var response = require('./rest');
var connection = require ('./koneksi');

exports.index = function (req,rest){
              response.ok("aplikasi rest api ku sudah berjalan ",rest)
};
//menambahkan semua data mahasiswa 
exports.tampilkansemuadatasiswa = function (req,rest){
              connection.query('SELECT * FROM mahasiswa',function(error ,rows,fileds){
                            if (error){
                                  connection.log(error);        
                            }else{
                                          response.ok( rows,rest)
                            }
              });
};