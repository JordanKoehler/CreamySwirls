const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const selectSize = [];
const selectFlavours = [];
const selectAdditions = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(express.static("Assets"));

app.get("/", function(req, res) {
  res.render("index");
})

app.get("/about", function(req, res) {
  res.render("about");
})
app.get("/FAQ", function(req, res) {
  res.render("FAQ");
})

app.get("/order", function(req, res) {
  res.render("order");
})

app.get("/logIn", function(req, res) {
  res.render("login");
})

app.get("/thankYou", function(req, res) {
  res.render("thankYou");
})

app.get("/yourOrder", function(req, res) {
  res.render("yourOrder");
})

app.post("/order", function(req, res) {

  res.redirect("yourOrder");
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
