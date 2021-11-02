const userRouter = require("express").Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// userRouter.get("/", (req, res) => {
//   User.find().then((user) => res.json(user));
//   // res.send(req.user);
// });
// userRouter.get("/", auth, (req, res) => {
//   console.log(req);
//   User.findOne({
//     _id: req.user.user._id,
//   }).then((user) => res.json(user));
// });
userRouter.get("/", (req, res) => {
  res.send(req.user);
});
userRouter.get("/all", auth, (req, res) => {
  console.log(req);
  User.find()
    .populate("question")
    .then((user) => res.json(user));
});
// update score and question id
userRouter.put("/score", auth, (req, res) => {
  const findUser = { _id: req.body._id };
  const updateScoreQid = { score: req.body.score, question: req.body.question };
  User.findOneAndUpdate(findUser, updateScoreQid)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// get user with questions
userRouter.get("/details", auth, (req, res) => {
  User.find({ email: req.user.user })
    .populate("question")
    .then((user) => res.json(user));
});
// create user
userRouter.post("/add", (req, res) => {
  User.create(req.body).then((user) => res.json(user));
});

userRouter.get("/user", auth, async (req, res) => {
  try {
    console.log("req.user", req.user);
    const user = await User.find({ email: req.user.user });

    res.send({
      user,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      error,
    });
  }
});

module.exports = userRouter;
