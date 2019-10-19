// Dependencies
const mysql = require("mysql");
let connection;

const JAWSDB_URL = "mysql://y8p5y3hfmabz96i2:plnuii5sf4p2j01t@t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c0aa3t77holc28ex";

// Define connection parameters to JAWSDB or local server
if (JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@gxYSCx&Y%sf",
    database: "burgers_db"
  });
}

// Establish the sql connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection to be used elsewhere
module.exports = connection;