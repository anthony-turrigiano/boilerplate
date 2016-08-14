//path
var path = require("path");

module.exports.get = function(req, res){
  res.sendFile(path.resolve("./src/views/html/index.html"));  
};