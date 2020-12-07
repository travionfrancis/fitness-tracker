const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8008;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/columbia", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", require("./routes/apiRoutes.js"));

app.use("/", require("./routes/htmlRoutes.js"));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});