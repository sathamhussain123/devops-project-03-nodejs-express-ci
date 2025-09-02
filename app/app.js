// app/app.js
const express = require("express");
const routes = require("./routes");

const app = express();
app.use("/", routes);

module.exports = app;  // Export only the app
