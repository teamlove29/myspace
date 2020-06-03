const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//สิทธิ์การเข้าถึงไฟล์
// app.use(express.static(__dirname + "/uploaded"));
// app.use.apply(cors());

app.use("/", require("./functions/authen/index.js"));
// app.use("/api/stock/", require("./api_stock.js"));

app.listen(3030, () => {
  console.log("Backend is running..");
});
