// Importing the express router
const Router = require("express").Router();
const path = require("path");

// Look at this again if it doesnt work
Router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

Router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

Router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = Router;