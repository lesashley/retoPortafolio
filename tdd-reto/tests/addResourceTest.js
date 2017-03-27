var assert = require('assert');
var testAdd = require('../addResource.js')


describe('addResource', function(){
    it('Retorna error si el campo ingresado es vacio', function(){
      assert.equal(testAdd.addResource(" "),"Ingrese un dato valido")
    })

})
