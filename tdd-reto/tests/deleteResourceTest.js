var assert = require('assert');
var testDelete = require('../deleteResource.js')


describe('deleteResource', function(){
    it('deberia de...pasar tal cosa sii...', function(){
      assert.equal(testDelete.deleteResource("debe mostrar"),"resultado")
    })
})
