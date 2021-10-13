const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const questionsRouter = require("./routes/questionsRouter");

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/questions", questionsRouter);
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
