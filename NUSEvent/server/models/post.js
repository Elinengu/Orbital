const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//destructure
const { ObjectId } = mongoose.Schema.Types;

const postSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    require: true,
  },
  dates: [
    {
      type: Date,
      required: true,
    },
  ],
  description: {
    type: String,
    requred: true,
  },
  images: [
    {
      //urls
      type: String,
      default: "no images",
    },
  ],
  postedBy: {
    // type: ObjectId,
    // ref: "Organiser", //refer to
    //after login feature settle
    type: String,
    default: "NUS",
  },
});

module.exports = mongoose.model("Post", postSchema);
//mongoose.model("Post", postSchema);
/* in other file:
require('.models/post')
mongoose.model("Post")
*/
