var assert = require('assert');
var myModule = require('../src/myModule.js');

describe('myModule', function () {
  it('should return collect message', function () {
    assert.equal(myModule.passMessage(), 'myModule mesage');
  });
});
