const express = require("express");
const functions = require("firebase-functions");
const app = express();
// const bodyparser = require("body-parser");
// const condb = require("../config/config-db");
const condb = require("../config/config-db");
const cors = require("cors");
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.get("/conn", (req, res) => {});
// app.use(bodyparser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  condb.query("SELECT * FROM member", (err, result) => {
    if (err) {
      res.status(200).send(err);
    } else {
      res.status(400).send(result);
    }
  });
});

// app.get("/add", (req, res) => {
//   const uid = req.body.uid;
//   var sql = "INSERT INTO member (mem_uid) VALUES ?";
//   con.query(sql, uid, (err, result) => {
//     if (err) throw err;
//     console.log("Insert Sucsess" + result.affectedRows);
//   });
// });

exports.singup = functions.https.onRequest(app);
