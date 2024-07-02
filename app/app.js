"use strict"

// 모듈
const express = require("express");
const app = express();
const path = require('path');


// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.set("views", path.join(__dirname, "src/views"));

app.use("/", home);

module.exports = app;
