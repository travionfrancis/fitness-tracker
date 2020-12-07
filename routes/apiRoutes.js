// Importing the express router
const Router = require("express").Router();
const path = require("path");
// Importing the models
const db = require("../models");

// GET all workouts
Router.get("/workouts", async (req, res) => {
  try {
    const workouts = await db.Workout.find().populate("exercises");
    res.json(workouts);
  }
  catch (err) {
    res.json(err);
  }
});

// POST a new workout
Router.post("/workouts", async (req, res) => {
  try {
    const workout = await db.Workout.create(req.body);
    res.json(workout);
  }
  catch (err) {
    res.json(err);
  }
});

// POST a new exercise and PUT it into a specific workout
Router.put("/workouts/:id", async (req, res) => {
  try {
    const exercise = await db.Exercise.create(req.body);
    const workout = await db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: exercise._id}}, {new: true}).populate("exercises");
    res.json(workout);
  }
  catch (err) {
    res.json(err);
  }
});

// GET request for the 7 latest workouts
Router.get("/workouts/range", async (req, res) => {
  try {
    // Sort desc by _id to get the latest ones and limit to 7
    const workouts = await db.Workout.find().sort({_id: -1}).limit(7).populate("exercises");
    res.json(workouts);
  }
  catch (err) {
    res.json(err);
  }
});

module.exports = Router;