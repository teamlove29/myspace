const functions = require("firebase-functions");
const express = require("express");
const router = express.Router();

const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
var db = admin.firestore();
const cors = require("cors")({
  origin: true,
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.login = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    //   check ค่าว่าง
    if (req.query.id != "" && req.query.id) {
      // ตัวแปล
      let email = req.query.email;
      let password = req.query.password;
      // db.collection (table) และเก็บค่าที่ได้ไว้ใน data
      db.collection("users")
        .where("email", "==", email)
        .get()
        .then((data) => {
          // res.send(data);
          // check length
          if (data.docs.length > 0) {
            data.forEach(async function (doc) {
              // check password
              if (doc.data().password == password) {
                res.status(200).json({
                  id: doc.id,
                  data: doc.data(),
                });
              } else {
                res.status(400).json({
                  error: {
                    code: "400",
                    message: "ค่า password ของ users ไม่ถูกต้อง",
                    detail: "Bad Request",
                  },
                });
              }
            });
          } else {
            res.status(400).json({
              error: {
                code: "400",
                message: "ค่า id ของ users เป็นค่าว่างหรือไม่ได้ส่งค่ามา",
                detail: "Bad Request",
              },
            });
          }
        });
    }
  });
});

exports.register = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.query.email != "" && req.query.email) {
      if (req.query.password != "" && req.query.password) {
        db.collection("users")
          .add({
            email: req.query.email,
            password: req.query.password,
          })
          .then(() => {
            res.status(200).json({
              error: {
                code: "200",
                message: "สมัครสมาชิกสำเร็จ",
                detail: "Success",
              },
            });
          })
          .catch((error) => {
            res.status(400).json({
              error: {
                code: "400",
                message: error,
                detail: "Fail",
              },
            });
          });
      }
    }
  });
});
