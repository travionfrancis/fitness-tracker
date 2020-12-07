// Dont forget to install express and everything also
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema (
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [{
        // name
      name: {
        type: String
      },

      // type
      type: {
        type: String
      },

      // weight
      weight: {
        type: Number
      },

      // sets
      sets: {
        type: Number
      },

      // reps
      reps: {
        type: Number
      },

      // duration
      duration: {
        type: Number
      },
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function () {

  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;