'use strict';
exports.ok = function (values, rest) {
              var data = {
                            'status': 200,
                            'values': values
              };

              rest.json(data);
              rest.end();
};
// response untuk nested matakuliah 
exports.oknested = function (values, rest) {
              //lakukan akumulasi 
              const hasil = values.reduce((akumulasikan, item) => {
                            //tentukan key group 
                            if (akumulasikan[item.nama]) {
                                          // buat variable group nama mashasiswa 
                                          const group = akumulasikan[item.nama];
                                          //cek jika isi array adalah matakuliah 
                                          if (Array.isArray(group.matakuliah)) {
                                                        // tambajkan value ke dalam groip matakuliah 
                                                        group.matakuliah.push(item.matakuliah);
                                          } else{
                                                 group.matakuliah = [group.matakuliah,item.matakuliah];       
                                          }
                            }else{
                                          akumulasikan[item.nama]=item ;
                            }
                            return akumulasikan;
              },{});

              var data = {
              'status': 200 ,
              'values': hasil,
              };
               rest.json(data); 
               rest.end();
}
