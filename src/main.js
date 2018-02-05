var myModule = require('./myModule.js');
var EventEmitter = require('eventemitter3');
var ajax = require('./ajax.js');
var $ = require("jquery");

module.exports.passMessage = function() {
  var sourceMassage = myModule.passMessage();
  return sourceMassage + " through main"
}

module.exports.init = function() {
  var EE = new EventEmitter();
  EE.on('success', function(msg) {
    document.getElementById('content').innerHTML = msg;
  });
  $('#btn-send').on('click', function() {
    ajax.get(EE);
  });
}
