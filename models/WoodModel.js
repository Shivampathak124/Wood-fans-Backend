const mongoose = require("mongoose");

const Wood = mongoose.Schema({
 "title": String,
  "type": String,
  "image": String,
  "urls1": String,
  "urls2": String,
  "urls3":  String,
  "price": Number,
});

module.exports = mongoose.model("Wood", Wood);
