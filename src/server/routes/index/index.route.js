//express
var express = require("express");
var router = express.Router();

//controller
var controller = require("./index.controller");

//routes
router
    .route("/")
    .get(controller.get);
    
//return router
module.exports = router;
    