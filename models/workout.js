// Importing mongoose schema to create model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for the model
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

// Defining a model using the schema
const Workout = mongoose.model("Workout", WorkoutSchema);

// Exporting the model
module.exports = Workout;