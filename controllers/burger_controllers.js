var burgers = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	burgers.selectAll(function(data){
		var burgersObject = {
			burgers: data
		};
		console.log(burgersObject);
		res.render("index", burgersObject;)
	});
});

router.post("/", function(req, res){
	burgers.insetOne([req.body.burger_name], function(data){
		res.redirect("/");
	});
});

router.update("/:id", function(req, res){
	var devouredCheck = "id =" + req.params.id;
	burgers.updateOne(devouredCheck, function(){
		res.redirect("/");
	});
});

module.exports = router;