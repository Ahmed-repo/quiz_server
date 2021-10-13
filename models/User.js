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
  score: Number,
  admin: Boolean,
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", User);
