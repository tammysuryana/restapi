'use strict';
var response = require('./rest');
var connection = require('./koneksi');

exports.index = function (req, rest) {
              response.ok("aplikasi rest api ku sudah berjalan ", rest)
};
//menambahkan semua data mahasiswa 
exports.tampilkansemuadatasiswa = function (req, rest) {
              connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
                            if (error) {
                                          connection.log(error);
                            } else {
                                          response.ok(rows, rest)
                            }
              });

};

// menampilkan data mahasiswa berdasarkan ID nya 
exports.tampilberdasarkanid = function (req, rest) {
              let id = req.params.id;
              connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
                            function (error, rows, fileds) {
                                          if (error) {
                                                        console.log(error);
                                          } else {
                                                        response.ok(rows, rest);
                                          }
                            });
};

// menambahkan data mahasiswa 
exports.tambahMahasiswa = function (req, rest) {
              var nim = req.body.nim;
              var nama = req.body.nama;
              var jurusan = req.body.jurusan;

              connection.query('INSERT INTO mahasiswa (nim,nama,jurusan)VALUES(?,?,?)',
                            [nim, nama, jurusan],
                            function (error, rows, fileds) {
                                          if (error) {
                                                        console.log(error);
                                          } else {
                                                        response.ok('data berhasil di tambahin nih'.rest)
                                          }
                            });
};

// merubah data berdasarkan id 
exports.UbahMasasiwa