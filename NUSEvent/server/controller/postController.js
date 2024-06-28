const Post = require("../models/post.model");

esports.createPost = async (req, res) => {
  const { title, description, photo } = req.body;

  if (!title || !description || !photo) {
    return res.status(400).json({ msg: "Please add all the fields" });
  }

  const post = new Post({
    Title,
    Description,
    Ptoho,
    PostedBy: req.Organiser,
  });

  post
    .save() //interact with mongoDB
    .then((result) => {
      //javascript promises
      res.json({ result, msg: "Post created successfully" });
    })
    .catch((err) => {
      throw res.status(500).json({ msg: err.message });
    });
};

// exports.getAllPosts = asyn(req, res) => {
//     await Post.find({})
//     .populate
// }
