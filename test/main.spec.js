var assert = require('assert');
var proxyquire = require('proxyquireify')(require);

var stubs = {
  './myModule.js': {
      passMessage: function () { return 'mocked message'; }
  }
};

var main = proxyquire('../src/main.js', stubs);

describe('main', function () {
  it('should return collect message', function () {
    assert.equal(main.passMessage(), 'mocked message through main');
  });
});
