const Wood = require("../models/WoodModel");

exports.getWoods = async (req, res) => {
  const userId = req.userId;
  try {
    const Wood = await Wood.find({ userId });
    console.log(Wood);
    res.send(Wood);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.postWoods = async (req, res) => {
  const userId = req.userId;
  const payload = req.body;
  try {
    await Wood.create({ ...payload, userId });
    res.send("Added");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
