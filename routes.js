'use strict';
 
module.exports = function (app){
              ver jsonku = require('./controller');

              app.route('./')
              .get(jsonku.index);

}