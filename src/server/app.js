//configuration

//express
var express = require("express");
var app = express();

//path
var path = require("path");


//static files
app.use("/public", express.static(path.resolve("./src/server/public")));

//routes
require("./routes/routes")(app);

module.exports = app;
