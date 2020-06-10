// const express = require("express");
// const cors = require("cors");
// const bodyparser = require("body-parser");
// const app = express();
// const condb = require("../config/config-db");

// // Automatically allow cross-origin requests
// app.use(cors({ origin: true }));
// app.use(bodyparser.urlencoded({ extended: false }));

// app.post("/", (req, res) => {
//   console.log(condb);
// });

// app.post("/db", (req, res) => {
//   //   var post = {
//   //     uid: req.body.uid,
//   //   };

//   condb.query(
//     "INSERT INTO member (mem_udi) VALUES (mKESjXdTJ4abOh7rV8SyJzKqU5a2)",
//     (error) => {
//       if (error) {
//         console.log(error.message);
//       } else {
//         console.log("success");
//       }
//     }
//   );
// });

// exports.login = functions.https.onRequest(app);
