const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyparser.urlencoded({ extended: false }));

exports.login = require("./auth/AddDb");

exports.edit = require("./profile/profile");