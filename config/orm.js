var connection = require("../config/connection.js");

var orm = {

	selectAll: function(tableName, cb){
	var queryString = "SELECT * FROM ??";	
		connection.query(queryString,[tableName], function(err, result){
			if (err) throw err;
			console.log(result);
			cb(result);
		});
	}, 

	insertOne: function(tableName, tableColumn1, tableColumn2, inputTableColumn1, inputTableColumn2, cb){
	var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
		connection.query(queryString, [tableName, tableColumn1, tableColumn2, inputTableColumn1, inputTableColumn2], function(err, result){
			if (err) throw err;
			console.log(result);
			cb(result);
		});	
	},

	updateOne: function(tableName, tableColumn1, tableColumn2, inputTableColumn1, inputTableColumn2, cb){
	var queryString = "UPDATE ?? SET (??, ??) WHERE (?, ?)";
		connection.query(queryString, [tableName, tableColumn1, tableColumn2, inputTableColumn1, inputTableColumn2], function(err, result){
			if (err) throw err;
			console.log(result);
			cb(result);
		});	
	}
};

module.exports = orm;