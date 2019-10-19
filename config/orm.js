// Dependencies
const connection = require("../config/connection.js");

// Here we define a function called objToSql
// This function will take the user inputs and translate them to our SQL database
// NOTE: This is not original work; it was taken from the class activities
function objToSql(ob) {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}


// Here we define our orm
// We define 3 functions, selectAll, insertOne, and updateOne
const orm = {
  // The selectAll function will simply display all data in the burgers table
  // It takes in 2 arguments, a table name and a call function
  selectAll: function (table, cb) {
    let sqlQuery = `SELECT * FROM ${table};`;
    connection.query(sqlQuery, function (err, result) {
      if (err) { throw err };
      cb(result);
    });
  },

  // The insertOne function allows us to add a new burger type to the burgers table
  // It takes 4 arguments, a table, column name, value for inputs, and a call back function
  insertOne: function (table, cols, vals, cb) {
    let sqlQuery = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?)`;
    connection.query(sqlQuery, vals, function (err, result) {
      if (err) { throw err }
      cb(result);
    });
  },

  // The updateOne function allows us to update the status of a burger to be devoured
  updateOne: function (table, objColVals, condition, cb) {
    let sqlQuery = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
    connection.query(sqlQuery, function (err, result) {
      if (err) { throw err };
      cb(result);
    });
  },
};

// Export the orm to be used in other files
module.exports = orm;