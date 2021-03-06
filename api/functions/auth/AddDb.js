const express = require("express");
const functions = require("firebase-functions");
const app = express();
const bodyparser = require("body-parser");
const condb = require("../config/config-db");
const cors = require("cors");

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(bodyparser.urlencoded({ extended: false }));

//  ฟังก์ชันเช็คล็อคอิน
app.post("/", (req, res) => {
    if (req.body.uid != "" && req.body.uid) {
        const values = [(uid = req.body.uid)];
        const sql = "   SELECT * FROM `member` WHERE mem_uid = ?"
        condb.query(sql, values, (err, result) => {
            if (result != "" && result) {
                res.status(200).send("Success");
            } else {
                res.status(400).send('Bad Req');
            }
        });
    } else {
        res.status(400).send('ไม่พบข้อมูลหรือข้อมูลเป็นค่าว่าง');
    }
});

// ฟังก์ชันเพิ่มผู้ใช้
app.post("/addmem", (req, res) => {
    const values = [(uid = req.body.uid), (display_name = req.body.display_name), (email = req.body.email), (type = req.body.type), (create = req.body.create)];
    const sql =
        "INSERT INTO `member` (`mem_id`, `mem_uid`, `mem_first_name`, `mem_last_name`, `mem_display_name`, `mem_email`, `mem_type`, `mem_avatar`, `mem_cover`, `mem_status`, `packages_member_id`, `mem_create`) VALUES (NULL, ?, '', '', ?, ?, ?, '', '', NULL, NULL, ?)";
    condb.query(sql, values, (err, result) => {
        if (err) {
            res.status(400).send('Bad Req');
        } else {
            res.status(201).send("Success");
        }
    });
});

app.get("/help", (req, res) => {
    res.status(200).send("Connect Success");
});

// ฟังก์ชันเพิ่มแอดมิน
app.post("/addadmin", (req, res) => {
    const values = [(uid = req.body.uid), (status = req.body.status)];
    const sql =
        "INSERT INTO `admin`(`admin_id`, `admin_uid`,  `admin_email`, `admin_tell`, `admin_first_name`, `admin_last_name`, `admin_type`)  VALUES (NULL, ?, '', '', '', NULL)";
    condb.query(sql, values, (err, result) => {
        if (err) {
            // res.status(400).send(err);
            res.status(400).send('Bad Req');
        } else {
            res.status(201).send("Success");
        }
    });
});

// 
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