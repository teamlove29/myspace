const express = require("express");
const functions = require("firebase-functions");
const app = express();
const bodyparser = require("body-parser");
const condb = require("../config/config-db");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
//ใช้ในการ decode jwt ออกมา
var ExtractJwt = passportJWT.ExtractJwt;
//ใช้ในการประกาศ Strategy
var JwtStrategy = passportJWT.Strategy;
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "SECRETKEY",
};
const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
  if (payload.type === "admin") done(null, true);
  else done(null, false);
});
passport.use(jwtAuth);
const requireJWTAuth = passport.authenticate("jwt", { session: false });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.get("/conn", (req, res) => {});
app.get("/", requireJWTAuth, (req, res) => {
  res.send("dadasda");
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdHRlc3QiLCJwb3NpdGlvbklEIjoiYWRtaW4iLCJzdGF0dXMiOiJnb29kIiwiaWF0IjoxNTkxODAxMzkxfQ.Cpc3_cWXmQc3JyLe6fJPMUM0ISF1bhIJFHYQyYhSlvQ"
  //     jwt.verify(token, "SECRETKEY" ,(err,user) => {
  //         res.json(user)
  //     })
  //   const sql = "SELECT * FROM admin";
  //   condb.query(sql, (err, result) => {
  //     if (err) {
  //       res.status(200).send(err);
  //     } else {
  //       res.json(result);
  //     }
  //   });
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
    .then(async (userRecord) => {
      const uid = userRecord.uid;
      const sql = "INSERT INTO `admin` VALUES (NULL, ?, ?, ?, ?, ?, ?)";
      await condb.query(
        sql,
        [uid, email, phone, firstName, lastName, type],
        (err, result) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).send(result);
          }
        }
      );
    })
    .catch(function (error) {
      res.status(400).send(error);
    });
});

exports.user = functions.https.onRequest(app);
