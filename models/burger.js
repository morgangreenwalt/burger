var orm = require("../config/orm.js");

var burgers = {

	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(inputTableColumnOne,inputTableColumnTwo,cb) {
		orm.insertOne("burgers", "burger_name", "devoured", inputTableColumnOne, inputTableColumnTwo, function(res){
			cb(res);
		});
	},

	updateOne: function(inputTableColumnOne,cb) {
		orm.updateOne("burgers", "devoured = true", inputTableColumnOne, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;