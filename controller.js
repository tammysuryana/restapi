'use strict';
var response = require('./rest');
var connection = require ('./koneksi');

exports.index = function (req,rest){
              response.ok("aplikasi rest api ku sudah berjalan ")
};