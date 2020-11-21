const { response } = require('express');
var express = require('express');
var auth = require('./auth'); 
var router = express.Router();
var verifikasi = require('./verifikasi');



//daftarkan menu registrasi
router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

//halaman yang perlu otorisasi 
router.get('/api/v1/rahasia',verifikasi(),auth.halaman );



module.exports = router;