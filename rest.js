'use strict';
exports.ok = function(value,rest){
              var data ={
              'status':200,
              'values':values
              };

              rest.json(data);
              rest.end();
}