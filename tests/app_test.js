var assert = require('assert');
var app = require('../assets/js/app.js');

describe('agregar recursos', function(){
    it('debe agregar en mi arreglo los recursos ingresados', function(){
      assert.equal(app.nuevoArray[3].resources.push("Google chrome"),nuevoArray[3].resources[3]);
    })
})
