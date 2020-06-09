require("dotenv").config();
// const mysql = require("mysql");

// const express = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

module.exports = con;
