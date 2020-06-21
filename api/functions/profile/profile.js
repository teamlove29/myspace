const express = require("express");
const functions = require("firebase-functions");
const app = express();
const bodyparser = require("body-parser");
const condb = require("../config/config-db");
const cors = require("cors");
// const jwt = require("jwt-simple");
const passport = require("passport");
require("dotenv").config();

// Automatically allow cross-origin requests

// app.use(bodyParser.json());

app.use(cors({ origin: true }));
app.use(bodyparser.urlencoded({ extended: false }));

//ใช้ในการ decode jwt ออกมา
const ExtractJwt = require("passport-jwt").ExtractJwt;
//ใช้ในการประกาศ Strategy
const JwtStrategy = require("passport-jwt").Strategy;

//สร้าง Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.SECRET
        // "O5m01VCHmj3w"
};

const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
    const sql = "SELECT `mem_uid` FROM member WHERE mem_uid = ? "
    condb.query(sql, [payload.uid], (err, result) => {
        if (result != "" && result) done(null, true);
        else done(null, false);
    })
});

//เสียบ Strategy เข้า Passport
passport.use(jwtAuth);

//ทำ Passport Middleware
const requireJWTAuth = passport.authenticate("jwt", { session: false });

//เสียบ middleware ยืนยันตัวตน JWT เข้าไป
app.get("/", requireJWTAuth, (req, res) => {
    if (req.body.id != "" && req.body.id) {
        const values = [req.body.id];
        const sql = "SELECT * FROM `member` WHERE mem_id = ?"
            // res.send(values)
            // return false;
        condb.query(sql, values, (err, result) => {
            if (result != "" && result) {
                res.status(200).send(result);
                // res.status(200).send("Success");
            } else {
                res.status(400).send('Bad Req');
            }
        });
    } else {
        res.status(400).send('ไม่พบข้อมูลหรือข้อมูลเป็นค่าว่าง');
    }
});

app.get("/edit", (req, res) => {
    const values = [(uid = req.body.uid), (first_name = req.body.first_name), (last_name = req.body.last_name), (display_name = req.body.display_name), (email = req.body.email), (type = req.body.type), (avatar = req.body.avatar), (cover = req.body.cover), (status = req.body.status), (packages = req.body.packages), (create = req.body.create), (id = req.body.id)];
    const sql = "UPDATE `member` SET `mem_uid`= ?,`mem_first_name`= ?,`mem_last_name`= ?,`mem_display_name`=  ?,`mem_email`= ?,`mem_type`= ?,`mem_avatar`= ?,`mem_cover`= ?,`mem_status`= ?,`packages_member_id`= ?,`mem_create`= ? WHERE mem_id = ?"
    condb.query(sql, values, (err, result) => {
        if (err) {
            res.status(400).send('Bad Req');
        } else {
            res.status(200).send(result);
        }
    });
});

app.get("/help", (req, res) => {
    res.status(200).send("Connect Success");
});

exports.profile = functions.https.onRequest(app);