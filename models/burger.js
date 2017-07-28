var orm = require("./config/orm.js");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name","burger_name");

orm.updateOne("burgers", "burger_name","burger_name");

module.exports = burger;