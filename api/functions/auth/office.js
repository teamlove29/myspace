const express = require("express");
const functions = require("firebase-functions");
const app = express();
const bodyparser = require("body-parser");
const condb = require("../config/config-db");
const cors = require("cors");
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(bodyparser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//     condb.query("SELECT * FROM member", (err, result) => {
//         if (err) {
//             res.status(200).send(err);
//         } else {
//             res.status(400).send(result);
//         }
//     });
// });

//  ฟังก์ชันเช็คล็อคอิน
app.post("/", (req, res) => {
    if (req.body.uid != "" && req.body.uid) {
        const values = [(uid = req.body.uid)];
        const sql = "SELECT * FROM `member` WHERE mem_uid = ? "
        condb.query(sql, values, (err, result) => {
            if (err) {
                res.status(400);
            } else {
                res.status(200);
            }
        });
    } else {
        res.status(400).json({
            error: {
                code: "400",
                message: "ค่า uid เป็นค่าว่างหรือไม่ได้ส่งค่ามา",
                detail: "Bad Request",
            },
        });
    }
});

// ฟังก์ชันเพิ่มผู้ใช้
app.post("/addmem", (req, res) => {
    const values = [(uid = req.body.uid), (display_name = req.body.display_name), (email = req.body.email), (type = req.body.type), (create = req.body.create)];
    const sql =
        "INSERT INTO `member` (`mem_id`, `mem_uid`, `mem_first_name`, `mem_last_name`, `mem_display_name`, `mem_email`, `mem_type`, `mem_avatar`, `mem_cover`, `mem_status`, `packages_member_id`, `mem_create`) VALUES (NULL, ?, '', '', ?, ?, ?, '', '', NULL, NULL, ?)";
    condb.query(sql, values, (err, result) => {
        if (err) {
            res.status(400).json(err)
            res.status(400).json({
                error: {
                    code: "400",
                    message: "เพิ่มข้อมูลไม่สำเร็จ",
                    detail: "Bad Request",
                },
            });
        } else {
            console.log("เพิ่มข้อมูลสำเร็จ" + result.affectedRows);
            res.status(201).send(result);
        }
    });
});

// // ฟังก์ชันเพิ่มแอดมิน
// app.post("/addadmin", (req, res) => {
//     const values = [(uid = req.body.uid), (status = req.body.status)];
//     const sql =
//         "INSERT INTO `admin`(`admin_id`, `admin_uid`,  `admin_email`, `admin_tell`, `admin_first_name`, `admin_last_name`, `admin_type`)  VALUES (NULL, ?, '', '', '', NULL)";
//     condb.query(sql, values, (err, result) => {
//         if (err) {
//             // res.status(400).send(err);
//             res.status(400).json({
//                 error: {
//                     code: "400",
//                     message: "เพิ่มข้อมูลไม่สำเร็จ",
//                     detail: "Bad Request",
//                 },
//             });
//         } else {
//             console.log("เพิ่มข้อมูลสำเร็จ" + result.affectedRows);
//             res.status(201).send(result);
//         }
//     });
// });

// // 
// app.get("/admin", (req, res) => {
//     condb.query("SELECT * FROM admin", (err, result) => {
//         if (err) {
//             res.status(200).json(err);
//         } else {
//             res.status(400).json(result);
//         }
//     });
// });

exports.member = functions.https.onRequest(app);