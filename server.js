var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});