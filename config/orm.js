var connection = require("./connection.js");

var orm = {

	selectAll: function(tableName){
	var queryString = "SELECT * FROM ??";	
		connection.query(queryString,[tableName], function(err, result){
			if (err) throw err;
			console.log(result);
		});
	}, 

	insertOne: function(tableName, tableColumn, inputOfTableColumn){
	var queryString = "INSERT INTO ?? WHERE ?? = ?";
		connection.query(queryString, [tableName, tableColumn, inputOfTableColumn], function(err, result){
			if (err) throw err;
			console.log(result);
		});	
	},

	updateOne: function(tableName, tableColumn, inputOfTableColumn){
	var queryString = "UPDATE ?? SET ?? WHERE ?";
		connection.query(queryString, [tableName, tableColumn, inputOfTableColumn], function(err, result){
			if (err) throw err;
			console.log(result);
		});	
	}
};

module.exports = orm;