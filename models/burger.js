var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll(function(result){
            cb(result);
        });
    },

    insertOne: function(newName, newDev, cb){
        orm.insertOne(newName, newDev, function(result){
            cb(result);
        });
    },

    updateOne: function(updated, condition, cb){
        var u = JSON.parse(JSON.stringify(updated));
        console.log(u);
        orm.updateOne(u, condition, function(result){
            cb(result);
        });
    }
}

module.exports = burger;