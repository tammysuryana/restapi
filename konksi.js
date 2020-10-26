var mysql = require ('mysql');


// buat koneksi ke database 

const conse =mysql.createConnection({
              host:'localhost',
              user:'root',
              password:'',
              database:'db_restapi',
});

conse.connect((err)=>{
              if(err) throw err;
              console.log('mysql terkoneksi');
});

module.exports = conse;
