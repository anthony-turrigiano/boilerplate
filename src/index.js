//path
var path = require("path");

//configuration
var config = require(path.resolve("./config/config"));

//http module
var http = require("http");

//app
var app = require("./server/app");

//create server
http.createServer(app).listen(config.port, config.host, function(){
   console.log("Listening at %s:%s", config.host, config.port); 
});