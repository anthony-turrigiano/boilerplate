module.exports = function(app){
  app.use("/", require("./index/index.route"));
};