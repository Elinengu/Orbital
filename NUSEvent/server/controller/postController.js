const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const { title, description, photo } = req.body;

  if (!title || !description) {
    return res.status(400).json({ msg: "Please add all the required fields" });
  }

  //test the Organiser later
  //console.log(req.organiser)
  //res.send("ok")

  const post = new Post({
    title, //key & value r same (original-> title ： title)
    description,
    photo,
    //postedBy: req.Organiser,
    organisedBy,
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

exports.getAllPosts = async (req, res) => {
  Post.find({})
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ msg: "An error occurred while fetching the posts" });
    });
};
