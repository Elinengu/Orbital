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
    type: String,
    default: "no photo",
  },
  postedBy: {
    type: ObjectId,
    ref: "Organiser", //refer to
  },
});

module.exports = mongoose.model("Post", postSchema);
//mongoose.model("Post", postSchema);
/* in other file:
require('.models/post')
mongoose.model("Post")
*/
