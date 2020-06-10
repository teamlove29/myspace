const express = require("express");
const functions = require("firebase-functions");
const app = express();
const bodyparser = require("body-parser");
const condb = require("../config/config-db");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.get("/conn", (req, res) => {});
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const sql = "SELECT * FROM admin";
  condb.query(sql, (err, result) => {
    if (err) {
      res.status(200).send(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/newUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const type = "1";

  admin
    .auth()
    .createUser({
      email: email,
      emailVerified: false,
      password: password,
    })
    .then((userRecord) => {
      const uid =  userRecord.uid;
      const sql =  "INSERT INTO `admin` VALUES (NULL, ?, ?, ?, ?, ?, ?)"
       condb.query(sql,[uid,email,phone,firstName,lastName,type], (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
    });
        }).catch(function (error) {
        res.status(400).send(error);
        });
    });


exports.user = functions.https.onRequest(app);
