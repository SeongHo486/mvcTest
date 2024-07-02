"use strict"

// 모듈
const express = require("express");
const app = express();
const path = require('path');


// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("view engine", "ejs");
// app.set("views", "./views");
app.set("views", path.join(__dirname, "views"));

app.use("/", home);

module.exports = app;
