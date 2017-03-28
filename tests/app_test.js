var assert = require('assert');
var app = require('../assets/js/app.js');
var agentes = new app.Agent();
describe('agregar recursos', function(){

    it('debe agregar en mi arreglo los recursos ingresados', function(){
      assert.equal(app.agentes.addResource("3","Google chrome"),arrayAgentes[3].resources[3]);
    })
})
