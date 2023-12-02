const User = require("../models/User")

const checkUser = async (req, res, next) => {
  const { email, googleSignIn } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    if (googleSignIn) res.send(user);
    else res.status(400).send({ message: "User Already Exists" });
  } else next();
};

module.exports = checkUser;
