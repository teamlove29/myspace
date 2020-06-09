// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const express = require("express");
// const cors = require("cors");
// const bodyparser = require("body-parser");
// const app = express();
// const config = require("../config/config-firebase");
// const firebase = require("firebase");

// // Automatically allow cross-origin requests
// app.use(cors({ origin: true }));
// app.use(bodyparser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   console.log(config);
// });

// app.post("/SingUp", (req, res) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(req.body.email, req.body.password)
//     .then(() => {
//       res.status(200);
//     })
//     .catch(() => {
//       res.status(400);
//     });
// });

// app.post("/SingInGoogle", (req, res) => {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(() => {
//       res.status(200);
//     })
//     .catch(() => {
//       res.status(400);
//     });
// });

// app.post("/SingInFacebook", (req, res) => {
//   var provider = new firebase.auth.FacebookAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(() => {
//       res.status(200);
//     })
//     .catch(() => {
//       res.status(200);
//     });
// });

// app.post("/", (req, res) => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(req.body.email, req.body.password)
//     .then(() => {
//       res.status(200);
//     })
//     .catch(() => {
//       res.status(400);
//     });
// });

// app.get("/State", (req, res) => {
//   firebase.auth().onAuthStateChanged((user) => {
//     var email = user.email;
//     if (user) {
//       res.status(200).json({
//         email: email,
//       });
//     } else {
//       res.status(400);
//     }
//   });
// });

// exports.login = functions.https.onRequest(app);
