// Importing mongoose schema to create model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for the model
const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Type is required"
  },
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  duration: {
    type: Number,
    required: "Duration is required"
  },
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number
});

// Defining a model using the schema
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// Exporting the model
module.exports = Exercise;