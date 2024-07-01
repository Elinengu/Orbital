const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const { title, description, photo } = req.body;

  if (!title || !description || !photo) {
    return res.status(400).json({ msg: "Please add all the required fields" });
  }

  const post = new Post({
    title,
    description,
    photo,
    postedBy: req.Organiser,
  });

  post
    .save() //interact with mongoDB
    .then((result) => {
      //javascript promises
      res.json({ result, msg: "Post created successfully" });
    })
    .catch((err) => {
      throw res
        .status(500)
        .json({ msg: "An error occurred while saving the post" });
    });
};

// exports.getAllPosts = asyn(req, res) => {
//     await Post.find({})
//     .populate
// }
