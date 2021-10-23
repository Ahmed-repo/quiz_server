const admin = (req, res, next) => {
  //   console.log(req.user.user);
  if (req.user.user.isAdmin) {
    return next();
  }

  return res.status(401).send("Not an admin");
};

module.exports = admin;
