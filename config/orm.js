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

	insertOne: function(tableName, tableColumnOne, tableColumnTwo, inputTableColumnOne, inputTableColumnTwo, cb){
	var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
		connection.query(queryString, [tableName, tableColumnOne, tableColumnTwo, inputTableColumnOne, inputTableColumnTwo], function(err, result){
			if (err) throw err;
			console.log(result);
			cb(result);
		});	
	},

	updateOne: function(tableName, tableColumnTwo, inputTableColumnOne, cb){
	var queryString = "UPDATE "+tableName+" SET "+tableColumnTwo+" WHERE "+inputTableColumnOne;
	console.log(queryString);
	connection.query(queryString, function(err, result){
		if (err) throw err;
			console.log(result);
			cb(result);
	});
		
		// connection.query(queryString, [tableName, tableColumnTwo, inputTableColumnOne, inputTableColumnTwo], function(err, result){
		// 	if (err) throw err;
		// 	console.log(result);
		// 	cb(result);
		// });	
	}
};

module.exports = orm;