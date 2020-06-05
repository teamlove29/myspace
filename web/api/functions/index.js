const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const firebase = require("firebase");

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyparser.urlencoded({ extended: false }));

exports.authen = require("./controllers/auth");

