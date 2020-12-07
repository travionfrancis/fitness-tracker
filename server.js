const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8008;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/columbia", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log("APP WORKING???? It's on PORT " + PORT);
});