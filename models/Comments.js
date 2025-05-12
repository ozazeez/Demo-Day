const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
//   image: {
//     type: String,
//     require: true,
//   },
  cloudinaryId: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  delete:{
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
