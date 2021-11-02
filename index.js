const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const questionsRouter = require("./routes/questionsRouter");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/questions", questionsRouter);

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
