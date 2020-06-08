// require("dotenv").config();
// const mysql = require("mysql");

// // const mysql = require("mysql");
// const conn = {
//   host: "http://35.197.154.227:8080/",
//   username: "root",
//   password: "0S5xz2lYRhmH",
//   db_name: "myspace",
// };

// const condb = mysql.createConnection(conn);

// condb.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Database: Connected!");
//   }
// });

// const express = require("express");
const mysql = require("mysql");

// const app = express();

const con = mysql.createConnection({
  host: "35.197.154.227",
  user: "root",
  password: "0S5xz2lYRhmH",
  database: "myspace",
  port: 3306,
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

module.exports = con;
