const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const htmlRouter = require("./routes/view.js");
const apiRouter = require("./routes/api.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/columbia',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// routes
app.use("/", htmlRouter);
app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});