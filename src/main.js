var myModule = require('./myModule.js');

module.exports.passMessage = function() {
  var sourceMassage = myModule.passMessage();
  return sourceMassage + " through main"
}
