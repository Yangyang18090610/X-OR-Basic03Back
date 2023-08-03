// const db = require("./Configs/config");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8000;
const routes = require("./Routes/index");
const cors = require("cors");

// Thêm một middleware để chèn thời gian bắt đầu truy cập vào các yêu cầu
// app.use(function (req, res, next) {
//   req.startTime = Date.now();
//   next();
// });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
