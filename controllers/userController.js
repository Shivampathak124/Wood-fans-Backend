const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findOne({ _id: userId });
    if (user) {
      console.log(user);
      res.send(user);
    } else {
      res.send({ message: "No user" });
    }
  } catch (err) {
    res.send({ message: err });
  }
};

exports.signup = async (req, res) => {
  const { name, email, password, googleSignIn } = req.body;
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      res.status(400).json({ message: err });
    }
    try {
      await User.create({ name, email, password: hash });
      res.status(200).json({ message: "Created" });
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(400).json("Bad request");
      }
      if (!result) res.status(400).json({ message: "Invalid Credentials" });
      else {
        const token = jwt.sign({ userId: user._id }, "secretkey");
        console.log(token);
        res.status(200).json({ message: "Login successful", token: token });
      }
    });
  } else {
    res.status(401).json({message: "No user found"});
  }
};
