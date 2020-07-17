const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("Assets"));

app.get("/index", function(req, res){
  res.render("index");
})

app.get("/about", function(req, res){
  res.render("about");
})
app.get("/FAQ", function(req, res){
  res.render("FAQ");
})

app.get("/order", function(req, res){
  res.render("order");
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
