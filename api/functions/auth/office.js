// const express = require("express");
// const functions = require("firebase-functions");
// const app = express();
// // const bodyparser = require("body-parser");
// // const condb = require("../config/config-db");
// const condb = require("../config/config-db");

// const cors = require("cors");

// // Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// app.get("/conn", (req, res) => {});

// // app.use(bodyparser.urlencoded({ extended: false }));
// // app.get("/", (req, res) => {
// //   condb.query("SELECT * FROM member", (err, result) => {
// //     if (err) {
// //       res.status(200).send(err);
// //     } else {
// //       res.status(400).send(result);
// //     }
// //   });
// // });

// app.post("/add", (req, res) => {
//   const value = [(uid = req.body.uid)];
//   const sql = "SELCET * FROM admin WHERE uid = ?";
//   condb.query(sql, value, (err, result) => {
//     if (err) {
//       // res.status(400).send(err);
//       res.status(400).json({
//         error: {
//           code: "400",
//           message: "เพิ่มข้อมูลไม่สำเร็จ",
//           detail: "Bad Request",
//         },
//       });
//     } else {
//       console.log("เพิ่มข้อมูลสำเร็จ" + result.affectedRows);
//       res.status(200).send(result);
//     }
//   });
// });

// exports.admin = functions.https.onRequest(app);
