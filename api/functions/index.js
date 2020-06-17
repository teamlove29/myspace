const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyparser.urlencoded({ extended: false }));

exports.auth = require("./auth/addDB");