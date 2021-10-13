const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Questions = new Schema({
  categorie: String,
  subCategorie: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorect_answers: [{ type: String }, { type: String }, { type: String }],
});

module.exports = mongoose.model("Questions", Questions);
