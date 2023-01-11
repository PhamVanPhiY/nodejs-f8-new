const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: { type: String, maxLength: 255 },
  age: { type: String, maxLength: 600 },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
