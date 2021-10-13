const express = require("express");
const questionsRouter = express.Router();
questionsRouter.use(express.json());
const Questions = require("../models/Questions");

// get all questions
questionsRouter.get("/", (req, res) => {
  Questions.find()
    .then((Questions) => res.json(Questions))
    .catch((err) => res.json(err));
});

// create question
questionsRouter.post("/", (req, res) => {
  Questions.create(req.body)
    .then((newQuestion) => res.json(newQuestion))
    .catch((err) => res.json(err));
});

module.exports = questionsRouter;
