var $ = require("jquery");

module.exports.get = function(emitter) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/orgs/octokit/repos'
  }).done(function(msg) {
    emitter.emit("success", JSON.stringify(msg))
  })
}
