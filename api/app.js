/* eslint-disable no-unused-vars */
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const router = require("./routes");
/* const session = require("cookie-session"); */



const app = express();
app.use(cors());
// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(
  session({
    secret: "holapepe",
  })
); */

app.use("/api",router);

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.sendStatus(404);
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;
