var connection = require("../config/connection.js");


var orm = {

    selectAll : function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    insertOne: function(newName, newDev, cb){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
        connection.query(queryString, [newName, newDev], function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    updateOne: function(updated, condition, cb){
      console.log("updated: "+JSON.parse(JSON.stringify(updated.devoured)));
        var queryString = "UPDATE burgers SET devoured=";
        queryString += updated.devoured;
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
        
    }
}
  module.exports = orm;
  