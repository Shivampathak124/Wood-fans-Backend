const mongoose = require("mongoose");

const Wood = mongoose.Schema({
 "title": String,
  "type": String,
  "image": String,
  "url1": String,
  "url2": String,
  "url3":  String,
  "price": Number,
});

module.exports = mongoose.model("Wood", Wood);
