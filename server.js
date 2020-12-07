// Importing express server module
const express = require("express");
const path = require("path");
// Importing the mongoose and morgan logger modules
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Setting up logger
app.use(logger("dev"));

// Setting the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to the db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Routes
// For static files, look in the public folder
app.use(express.static(path.join(__dirname, 'public')));
// API Routes
app.use("/api", require("./routes/apiRoutes.js"));
// HTML Routes
app.use("/", require("./routes/htmlRoutes.js"));

// Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});