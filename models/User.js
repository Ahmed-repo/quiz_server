const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  first_name: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  last_name: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  score: { type: Number, default: 0 },
  correctAnswer: { type: Number, default: 0 },
  wrongAnswer: { type: Number, default: 0 },
  admin: { type: Boolean, default: false },
  progress: { type: Number, default: 0 },
  date: { type: Date, default: Date.now() },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
});

module.exports = mongoose.model("User", User);
