const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const auth = require("../firebase");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//สิทธิ์การเข้าถึงไฟล์
app.use(express.static(__dirname + "/uploaded"));

app.use("/api/v2/authen/", require("./api_authen.js"));
app.use("/api/v2/stock/", require("./api_stock.js"));

app.listen(3030, () => {
  console.log("Backend is running..");
});
