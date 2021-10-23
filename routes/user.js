const userRouter = require("express").Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

userRouter.get("/", (req, res) => {
  res.send(req.user);
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
