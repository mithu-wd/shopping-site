const express = require("express");
const app = express();
app.use(express.json());
const Home = require("../backend/routes/home_route");
app.use("/", Home);

module.exports = app;
