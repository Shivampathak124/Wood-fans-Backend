const Wood = require("../models/WoodModel");

exports.getWoods = async (req, res) => {
  const userId = req.userId;
  try {
    const Wooddata = await Wood.find();
    console.log(Wooddata);
    res.send(Wooddata);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err);
  }
};

exports.postWoods = async (req, res) => {
  const userId = req.userId;
  const payload = req.body;
  try {
    await Wood.create({ ...payload, userId });
    res.send("Added");
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.updateWood =  async (req, res) => {
    const woodId = req.params.woodId
    const userID = req.userId;
    const user = await Wood.findOne({ _id: woodId })
    const userEmail = user.userEmail
    const payload = req.body
    await Wood.findOneAndUpdate({_id : woodId  } , payload)
    res.send({ message: `wood ${woodId} updated` });

}



exports.deleteWood = async (req, res) => {
    const woodId = req.params.woodId
    await Wood.findOneAndDelete({ _id: woodId })
    res.send({ message: "deleted successfully" });
};
