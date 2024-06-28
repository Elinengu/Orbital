const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//destructure
const { ObjectId } = mongoose.Schema.Types;

const postSchema = Schema({
  title: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    requred: true,
  },
  photo: {
    type: Buffer,
    default: "no photo",
  },
  postedBy: {
    type: ObjectId,
    ref: "Organiser",
  },
});

module.exports = mongoose.model("Post", postSchema);
