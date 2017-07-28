var orm = require("../config/orm.js");

var burgers = {

	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(cb) {
		orm.insertOne("burgers", tableColumn1, tableColumn2, inputTableColumn1, inputTableColumn2, function(cb){
			cb(res);
		});
	},

	updateOne: function(cb) {
		orm.updateOne("burgers", tableColumn1, tableColumn2, inputTableColumn1, inputTableColumn2, function(){
			cd(res);
		});
	}
};

module.exports = burgers;