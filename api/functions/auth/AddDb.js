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
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/add", (req, res) => {});

exports.singup = functions.https.onRequest(app);
