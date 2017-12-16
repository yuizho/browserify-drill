var assert = require('assert');
var main = require('../src/main.js');

describe('main', function () {
  it('should return collect message', function () {
    assert.equal(main.passMessage(), 'myModule mesage through main');
  });
});
