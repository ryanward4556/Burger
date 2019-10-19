// Dependencies
const orm = require("../config/orm.js");

// Here we define a model called burger that contains our 3 functions
// We import the functions from our orm.js folder
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the burger model to be used in other files
module.exports = burger;